import {useOutletContext} from "react-router";
import {useQuery} from '@tanstack/react-query';
import ReactApexChart from "react-apexcharts";

import Loader from "../components/Loader.tsx";

type OutletContext = {
  coinId: string;
}

type CoinOhlcv = {
  time_open: number; // Unix timestamp (seconds)
  time_close: number; // Unix timestamp (seconds)
  open: string; // Opening price as a string
  high: string; // Highest price during the period
  low: string; // Lowest price during the period
  close: string; // Closing price as a string
  volume: string; // Trading volume as a string
  market_cap: number; // Market capitalization, possibly 0 if unavailable
};

const fetchCoinOhlcv = async (coinId?: string): Promise<CoinOhlcv[]> => {
  if (!coinId) {
    throw new Error('CoinId not found');
  }
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(res => res.json());
};


function Chart() {
  const {coinId} = useOutletContext<OutletContext>();

  const {isFetching: isOhlcvFetching, data: ohlcvData} = useQuery({
    queryKey: [coinId, 'ohlcv'],
    queryFn: () => fetchCoinOhlcv(coinId),
    enabled: !!coinId,
  });

  const closePriceData = (ohlcvData ?? []).map((ohlcv) => parseFloat(ohlcv['close']));

  const closeTimeData = (ohlcvData ?? []).map((ohlcv) => ohlcv['time_close']);

  return (
      <Loader isLoading={isOhlcvFetching}>
        <ReactApexChart
            type="line"
            series={[{name: 'price', data: closePriceData}]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: {show: false},
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: {show: false},
                axisTicks: {show: false},
                labels: {show: false},
                type: "datetime",
                categories: closeTimeData,
              },
              fill: {
                type: "gradient",
                gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
        />
      </Loader>
  )
}

export default Chart;


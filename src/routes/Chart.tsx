import {useOutletContext} from "react-router";
import {useQuery} from '@tanstack/react-query';

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

  return (
      <>
        <h1>Chart</h1>
      </>
  )
}

export default Chart;


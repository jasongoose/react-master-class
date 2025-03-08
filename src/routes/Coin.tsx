import {Link, Outlet, useMatch, useParams} from "react-router";
import {useQuery} from '@tanstack/react-query'

import {Container, Description, Header, Overview, OverviewItem, Tab, Tabs, Title} from "../components/styled-ui.tsx";
import Loader from "../components/Loader.tsx";

type Params = {
  coinId?: string;
}

type DetailsData = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

type PriceData = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const fetchCoinDetails = async (coinId?: string): Promise<DetailsData> => {
  if (!coinId) {
    throw new Error('CoinId not found');
  }
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(res => res.json());
};

const fetchCoinTickers = async (coinId?: string): Promise<PriceData> => {
  if (!coinId) {
    throw new Error('CoinId not found');
  }
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(res => res.json());
}

function Coin() {
  const {coinId} = useParams<Params>();
  const chartPathMatch = useMatch('/:coinId/chart');
  const pricePathMatch = useMatch('/:coinId/price');

  const {isFetching: isDetailsFetching, data: detailsData} = useQuery({
    queryKey: [coinId, 'details'],
    queryFn: () => fetchCoinDetails(coinId),
  });

  const {isFetching: isTickersFetching, data: priceData} = useQuery({
    queryKey: [coinId, 'tickers'],
    queryFn: () => fetchCoinTickers(coinId),
    refetchInterval: 5_000,
  });

  const isFetching = isDetailsFetching || isTickersFetching;

  return (
      <Container>
        <Loader isLoading={isFetching}>
          <Header>
            <Title>{detailsData?.['name']}</Title>
          </Header>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{detailsData?.['rank']}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${detailsData?.['symbol']}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${priceData?.['quotes']['USD']['price'].toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{detailsData?.['description']}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.['total_supply']}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.['max_supply']}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Link to={`/${coinId}/chart`}>
              <Tab $isActive={chartPathMatch !== null}>Chart</Tab>
            </Link>
            <Link to={`/${coinId}/price`}>
              <Tab $isActive={pricePathMatch !== null}>Price</Tab>
            </Link>
          </Tabs>
        </Loader>
        <Outlet context={{coinId}}/>
      </Container>
  )
}

export default Coin;
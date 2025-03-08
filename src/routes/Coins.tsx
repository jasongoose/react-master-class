import {Link} from "react-router";
import {useQuery} from "@tanstack/react-query";

import {CoinItem, CoinList, Container, Header, Img, Loader, Title} from "../components/styled-ui.tsx";

type CoinItem = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const MAX_COIN_COUNT = 100;

const fetchCoinList = async (): Promise<CoinItem[]> => {
  return fetch('https://api.coinpaprika.com/v1/coins').then((res) => res.json());
};

function Coins() {
  const {isFetching: isCoinListFetching, data: coinListData} = useQuery({
    queryKey: ['all-coins'],
    queryFn: fetchCoinList,
  });

  const coinList = (coinListData ?? []).slice(0, MAX_COIN_COUNT);

  return (
      <Container>
        <Header>
          <Title>Coins</Title>
        </Header>
        <CoinList>
          {isCoinListFetching ? <Loader>Loading...</Loader> : coinList.map((coin) => (
              <Link to={`/${coin['id']}`} state={{name: coin['name']}} key={coin['id']}>
                <CoinItem key={coin['id']}>
                  <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin['symbol'].toLowerCase()}`} alt=""/>
                  {coin['name']} &rarr;
                </CoinItem>
              </Link>
          ))}
        </CoinList>
      </Container>
  )
}

export default Coins;
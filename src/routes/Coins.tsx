import {Link} from "react-router";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet";

import {CoinItem, CoinList, Container, Header, Img, Title} from "../components/styled-ui.tsx";
import Loader from "../components/Loader.tsx";


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
        <Helmet>
          <title>Coins</title>
        </Helmet>
        <Header>
          <Title>Coins</Title>
        </Header>
        <CoinList>
          <Loader isLoading={isCoinListFetching}>
            {coinList.map((coin) => (
                <Link to={`/${coin['id']}`} state={{name: coin['name']}} key={coin['id']}>
                  <CoinItem key={coin['id']}>
                    <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin['symbol'].toLowerCase()}`} alt=""/>
                    {coin['name']} &rarr;
                  </CoinItem>
                </Link>
            ))}
          </Loader>
        </CoinList>
      </Container>
  )
}

export default Coins;
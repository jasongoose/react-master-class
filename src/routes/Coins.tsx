import {Link} from "react-router";
import {useEffect, useState} from "react";
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

const fetchCoinList = async () => {
  const coinListData: CoinItem[] = await fetch('https://api.coinpaprika.com/v1/coins').then((res) => res.json());
  return coinListData.slice(0, MAX_COIN_COUNT);
};

function Coins() {
  const [coinList, setCoinList] = useState<CoinItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setCoinList(await fetchCoinList());
      setIsLoading(false);
    })()
  }, []);

  return (
      <Container>
        <Header>
          <Title>Coins</Title>
        </Header>
        <CoinList>
          {isLoading ? <Loader>Loading...</Loader> : coinList.map((coin) => (
              <Link to={`/:${coin['id']}`}>
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
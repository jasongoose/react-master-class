import styled from "styled-components";
import {Link} from "react-router";
import {useEffect, useState} from "react";

type CoinItem = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CoinItem = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color .2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
`

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
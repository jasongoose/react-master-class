import {useLocation, useParams} from "react-router";
import {Container, Header, Title} from "../components/styled-ui.tsx";
import {useEffect, useState} from "react";

function Coin() {
  const params = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //
  }, []);

  return (
      <Container>
        <Header>
          <Title>{location.state?.['name'] ?? 'Loading...'}</Title>
        </Header>
      </Container>
  )
}

export default Coin;
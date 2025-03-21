import {Suspense} from "react";
import styled from "styled-components";
import Loader from "../ui/Loader.tsx";
import CharacterList from "../ui/CharacterList.tsx";

const LayoutHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Home() {
  return (
      <LayoutHome>
        <h1>Home</h1>
        <Suspense fallback={<Loader/>}>
          <CharacterList/>
        </Suspense>
      </LayoutHome>
  );
}

export default Home;
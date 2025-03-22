import {Suspense} from "react";
import styled from "styled-components";
import Loader from "../ui/parts/Loader.tsx";
import CharacterList from "../ui/contents/CharacterList.tsx";

const LayoutHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
      <LayoutHome>
        <Suspense fallback={<Loader/>}>
          <CharacterList/>
        </Suspense>
      </LayoutHome>
  );
}

export default Home;
import {Suspense} from "react";
import styled from "styled-components";
import Loader from "../ui/parts/Loader.tsx";
import CharacterList from "../ui/CharacterList.tsx";
import {StickyTitle} from "../ui/parts/StickyTitle.tsx";

const LayoutHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


function Home() {
  return (
      <LayoutHome>
        <StickyTitle>Home</StickyTitle>
        <Suspense fallback={<Loader/>}>
          <CharacterList/>
        </Suspense>
      </LayoutHome>
  );
}

export default Home;
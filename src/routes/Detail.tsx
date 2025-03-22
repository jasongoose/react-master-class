import {Suspense} from "react";
import {useParams} from "react-router";
import styled from "styled-components";
import CharacterInfo from "../ui/contents/CharacterInfo.tsx";
import Loader from "../ui/parts/Loader.tsx";

type Params = {
  id: string;
}

const LayoutDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Detail() {
  const {id} = useParams<Params>();

  return (
      <LayoutDetail>
        <Suspense fallback={<Loader/>}>
          <CharacterInfo id={id!}/>
        </Suspense>
      </LayoutDetail>
  );
}

export default Detail;
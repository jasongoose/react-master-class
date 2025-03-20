import styled from "styled-components";
import {Suspense} from "react";
import {useParams} from "react-router";
import CharacterInfo from "../ui/CharacterInfo.tsx";
import Loader from "../ui/Loader.tsx";

type Params = {
  id: string;
}

const LayoutDetail = styled.div`
  display: flex;
  flex-direction: column;
`

function Detail() {
  const {id} = useParams<Params>();

  return (
      <LayoutDetail>
        <h1>Detail</h1>
        <Suspense fallback={<Loader/>}>
          <CharacterInfo id={id!}/>
        </Suspense>
      </LayoutDetail>
  );
}

export default Detail;
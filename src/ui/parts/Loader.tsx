import styled from "styled-components";
import {LargeTitle} from "../styled/LargeTitle.tsx";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Loader() {
  return (
      <LoaderContainer>
        <LargeTitle>Loading...</LargeTitle>
      </LoaderContainer>
  )
}

export default Loader;
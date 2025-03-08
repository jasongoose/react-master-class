import styled from "styled-components";
import {PropsWithChildren} from "react";

type Props = {
  isLoading: boolean;
  text?: string;
}

export const LoaderText = styled.h1`
  text-align: center;
`;

function Loader({isLoading, text = 'Loading...', children}: PropsWithChildren<Props>) {
  return isLoading ? <LoaderText>{text}</LoaderText> : children;
}

export default Loader;
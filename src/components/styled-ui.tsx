import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CoinItem = styled.li`
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

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

export const Loader = styled.span`
  text-align: center;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
`

import styled, {keyframes} from 'styled-components';

type BoxProps = {
  bgColor: string;
}

const Father = styled.div`
  display: 'flex';
`;

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Button = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {

    &:hover {
      font-size: 98px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
      <>
        <Title></Title>
        <Father>
          <Box bgColor="teal"></Box>
          <Box bgColor="tomato"></Box>
          <Circle bgColor="green"></Circle>
          <Button>Button</Button>
          <Button as="a" href="/">Login</Button>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
        </Father>
        <Wrapper>
          <BiggerBox>
            <Emoji>🤩</Emoji>
          </BiggerBox>
          <Emoji>🔥</Emoji>
        </Wrapper>
      </>
  );
}

export default App
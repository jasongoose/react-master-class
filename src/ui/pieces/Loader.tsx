import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 50px;
  }
`;

function Loader() {
  return (
    <LoaderContainer>
      <span>Loading...</span>;
    </LoaderContainer>
  );
}

export default Loader;

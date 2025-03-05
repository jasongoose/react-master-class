import {FormEvent, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="username" value={value} onChange={handleInputChange}/>
        <button>log in</button>
      </form>
  );
}

export default App
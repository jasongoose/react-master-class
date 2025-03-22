import {BrowserRouter, Route, Routes} from "react-router";
import styled from "styled-components";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from "./utils/GlobalStyle.tsx";
import ThemeSwitch from "./ui/parts/ThemeSwitch.tsx";

const ThemeSwitchWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

function App() {
  return (
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="character/:id" element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
        <ThemeSwitchWrapper>
          <ThemeSwitch size={30}/>
        </ThemeSwitchWrapper>
      </>
  )
}

export default App
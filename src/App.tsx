import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from "./GlobalStyle.tsx";

function App() {
  return (
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/character/:id" element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
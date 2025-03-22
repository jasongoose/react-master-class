import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from "./utils/GlobalStyle.tsx";

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
      </>
  )
}

export default App
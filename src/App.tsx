import {BrowserRouter, Route, Routes} from "react-router";

import Coin from "./routes/Coin.tsx";
import Coins from "./routes/Coins.tsx";
import Price from "./routes/Price.tsx";
import Chart from "./routes/Chart.tsx";
import {GlobalStyle} from "./components/styled-ui.tsx";


function App() {
  return (
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Coins/>}/>
            <Route path="/:coinId" element={<Coin/>}>
              <Route path="price" element={<Price/>}/>
              <Route path="chart" element={<Chart/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App
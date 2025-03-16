import {BrowserRouter, Route, Routes} from "react-router";

import {GlobalStyle} from "./components/styled-ui.tsx";
import Coin from "./routes/Coin.tsx";
import Coins from "./routes/Coins.tsx";
import Price from "./routes/Price.tsx";
import Chart from "./routes/Chart.tsx";
import TodoList from './routes/TodoList.tsx';
import KanbanBoard from "./routes/KanbanBoard.tsx";
import Motion from "./routes/Motion.tsx";


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
            <Route path="/todo-list" element={<TodoList/>}/>
            <Route path="/kanban" element={<KanbanBoard/>}></Route>
            <Route path="/motion" element={<Motion/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App
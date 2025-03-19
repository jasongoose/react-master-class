import {BrowserRouter, Route, Routes} from "react-router";

import LayoutIndex from "./pages/LayoutIndex.tsx";
import About from "./pages/About.tsx";
import Author from "./pages/Author.tsx";
import LayoutAuthorBook from "./pages/LayoutAuthorBook.tsx";
import Chapters from "./pages/Chapters.tsx";
import Characters from "./pages/Characters.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<LayoutIndex/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/author/:name" element={<Author/>}>
            <Route path=":book" element={<LayoutAuthorBook/>}>
              <Route path="chapters" element={<Chapters/>}></Route>
              <Route path="characters" element={<Characters/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
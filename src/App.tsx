import {BrowserRouter, Route, Routes} from "react-router";

import LayoutGlobal from "./pages/LayoutGlobal.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Author from "./pages/Author.tsx";
import LayoutAuthorBook from "./pages/LayoutAuthorBook.tsx";
import Chapters from "./pages/Chapters.tsx";
import Characters from "./pages/Characters.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutGlobal/>}>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="author/:authorId" element={<Author/>}>
              <Route path=":bookId" element={<LayoutAuthorBook/>}>
                <Route path="chapters" element={<Chapters/>}></Route>
                <Route path="characters" element={<Characters/>}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
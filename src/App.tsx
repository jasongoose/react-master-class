import { BrowserRouter, Route, Routes } from 'react-router';
import PageLayout from './ui/pieces/PageLayout.tsx';
import Home from './routes/Home.tsx';
import ComingSoon from './routes/ComingSoon.tsx';
import NowPlaying from './routes/NowPlaying.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="now-playing" element={<NowPlaying />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

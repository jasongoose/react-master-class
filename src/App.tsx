import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/Home.tsx';
import ComingSoon from './routes/ComingSoon.tsx';
import NowPlaying from './routes/NowPlaying.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comming-soon" element={<ComingSoon />} />
        <Route path="/now-playing" element={<NowPlaying />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

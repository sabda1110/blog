import Home from './page/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexContent from './page/content/IndexContent';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/blog" element={<Home />} />
        <Route path="*" element={<IndexContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

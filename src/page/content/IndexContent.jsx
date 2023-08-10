import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import ContentPertama from './ContentPertama';
import ContentKetiga from './ContentKetiga';
import { Routes, Route } from 'react-router-dom';
import './content.css';

const IndexContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/blog/contentPertama" element={<ContentPertama />} />
        <Route path="/blog/ketiga" element={<ContentKetiga />} />
      </Routes>
      <Footer />
    </>
  );
};

export default IndexContent;

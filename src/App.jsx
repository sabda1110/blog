import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
import Category from './Components/category/Category';
import Feature from './Components/feature/Feature';
import Lastes from './Components/lastesUpdate/Lastes';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Feature title={'Featured Article'} status={false} />
      <Feature title={'CSS'} status={false} />
      <Feature title={'JavaScript'} status={false} />
      <Feature title={'React Js'} status={true} />
      <Lastes />
      <Footer />
    </>
  );
}

export default App;

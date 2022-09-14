import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import ToursGrid from './components/ToursGrid';
import { getAllTours } from './MOCKDATA';

const App = () => {
  const tours = getAllTours();
  return (
    <BrowserRouter>
      <Header />
      <Banner />

      <ToursGrid tours={tours} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

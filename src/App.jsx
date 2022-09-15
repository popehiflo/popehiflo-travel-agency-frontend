import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import ToursGrid from './components/ToursGrid';
import TourCategories from './components/TourCategories';
import { getAllTours } from './MOCKDATA';
import Home from './pages/Home';

const App = () => {
  const tours = getAllTours();
  return (
    <BrowserRouter>
      <Home />
      <Header />
      <Banner />
      <TourCategories />
      <ToursGrid tours={tours} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

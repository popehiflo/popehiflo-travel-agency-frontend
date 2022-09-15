import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ToursGrid from './components/ToursGrid';
import { getAllTours } from './MOCKDATA';
import Home from './pages/Home';

const App = () => {
  const tours = getAllTours();
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/sign-in" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>SIGN IN</h1>} />
        <Route path="/account/sign-up" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>SIGN UP</h1>} />
        <Route path="/backpack" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>BACKPACK</h1>} />
        <Route path="/backpack" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>BACKPACK</h1>} />
        <Route path="/tours" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>FILTERED TOURS</h1>} />
        <Route path="/tour/:slug" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>TOUR DESCRIPTION</h1>} />
        <Route path="/admin-panel" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>ADMIN PANEL</h1>} />
        <Route path="*" element={<h1 style={{ margin: '100px', textAlign: 'center' }}>ERROR 404</h1>} />
      </Routes>
      <ToursGrid tours={tours} />

      <Footer />
    </BrowserRouter>
  );
};

export default App;

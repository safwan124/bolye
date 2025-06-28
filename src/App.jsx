import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';
import AboutUs from './pages/About';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetails';
import WedProducts from './pages/Wedding';
import BirthdayProducts from './pages/Bpdecor';
import BouquetProducts from './pages/Garland';
import StageVenueProducts from './pages/StageVenue';

function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/about-us' element={ <AboutUs />}/>
          <Route path='/shop-now' element={ <Products />}/>
          <Route path='/shop-now/:id' element={ <ProductDetail />}/>
          <Route path='/wedding-decore' element={<WedProducts />}/>
          <Route path='/birthday-decore' element={<BirthdayProducts />}/>
          <Route path='/boquets-garlands' element={<BouquetProducts />}/>
          <Route path='/stage-venue' element={<StageVenueProducts />}/>
        </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

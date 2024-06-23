import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* <NavigationMenu /> */}
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

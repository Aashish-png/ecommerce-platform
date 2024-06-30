import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

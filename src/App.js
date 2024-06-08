import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productsSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(getProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (productStatus === 'succeeded') {
    content = products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    ));
  } else if (productStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {content}
    </div>
  );
};

export default ProductList;

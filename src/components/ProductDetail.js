import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === Number(productId))
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;

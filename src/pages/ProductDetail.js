// Pages/ProductDetail.js

import React, { useState, useEffect, Component } from 'react';
import BidForm from '../components/BidForm';

function ProductDetail({ productId }) {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Call API to get product by id
  }, [productId])

  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} />
          <p>{product.description}</p>
          
          <BidForm product={product} />
        </>
      )}
    </div>
  );
}

export default ProductDetail;
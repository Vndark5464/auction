// Pages/ProductList.js

import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // await fetch products
    }
    fetchData();
  }, [])

  return (
    <div className="product-list" role="list">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
// Pages/ProductList.js

import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';

function ProductList() {

  const [products, setProducts] = useState([]);

  // Call API to get products

  useEffect(() => {
    async function fetchData() {
      // await fetch products
    }
    fetchData();
  }, [])

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem product={product} />
      ))}
    </div>
  );

}

export default ProductList;
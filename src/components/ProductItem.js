import React from 'react';

function ProductItem({ product }) {
  return (
    <div key={product.id} role="listitem">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
// Components/HistoryPrice.js

import React, { useState, useEffect } from 'react';

function HistoryPrice({ productId }) {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Call API to get price history of product  
  }, [productId])

  return (
    <div className="history-price">
      <h3>Price History</h3>
      
      <div className="history-list">
        {history.map(item => (
          <div className="history-item">
            <div>{item.bidPrice}</div> 
            <div>{item.bidTime}</div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default HistoryPrice;
// Components/HistoryPrice.js

import React, { useState, useEffect } from 'react';

function HistoryPrice({ productId }) {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Call API to get price history of product  
  }, [productId])

  return (
    <div className="history-price">
      <h3 id="priceHistoryLabel">Price History</h3>
      
      <div role="list" aria-labelledby="priceHistoryLabel" className="history-list">
        {history.map((item, index) => (
          <div role="listitem" key={index} className="history-item">
            <div aria-label="bid price">{item.bidPrice}</div> 
            <div aria-label="bid time">{item.bidTime}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryPrice;
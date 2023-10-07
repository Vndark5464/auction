import React, { useState } from 'react';

function AuctionProductTable() {
  const [auctionProducts, setAuctionProducts] = useState([
    {id: 1, name: 'Sản phẩm 1', currentBid: '2000', auctionEnd: '30/12/2021'},
    {id: 2, name: 'Sản phẩm 2', currentBid: '1500', auctionEnd: '25/12/2021'},
    // Thêm sản phẩm khác tại đây
  ]);

  return (
    <table role="table" aria-label="Bảng sản phẩm đấu giá">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Giá hiện tại</th>
          <th scope="col">Ngày kết thúc phiên đấu giá</th>
        </tr>
      </thead>
      <tbody>
        {auctionProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.currentBid}</td>
            <td>{product.auctionEnd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AuctionProductTable;
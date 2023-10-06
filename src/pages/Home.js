// Pages/Home.js

import React from 'react';
import Header from '../components/Head';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      {/* Phần nội dung khác của trang chủ */}
      <Header/>
      <Footer />
    </div>
  );
}

export default Home;
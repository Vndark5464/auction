// Pages/Home.js

import React from 'react';
import Header from '../components/Head';
import Body from '../components/Body';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      {/* Phần nội dung khác của trang chủ */}
      <Header/>
      <Body/>
      <Footer />
    </div>
  );
}

export default Home;
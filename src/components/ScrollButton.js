import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
     });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])

  return (
    <button type="button" 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} 
            aria-label="Quay lại đầu trang">
      Quay lại đầu trang
    </button>
  );
}

export default ScrollButton;
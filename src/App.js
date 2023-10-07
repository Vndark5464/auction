import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  // create a state to hold your data when you get it 
  const [data, setData] = useState(null);

  // useEffect hook to trigger on component mount
  useEffect(() => {
    // axios request to your server 
    axios.get('http://localhost:5000/api/endpoint')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []); // Empty array signifies no re-run

  // Now you have your data and can pass it as a prop or display it in this component
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
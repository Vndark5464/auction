import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/users')
      .then((response) => setData(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<Login data={data} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
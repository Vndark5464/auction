// src/SomeComponent.js
import axios from 'axios';

const getData = async () => {
  const response = await axios.get('http://localhost:5000/api/endpoint');
  return response.data;
}
// Pages/Register.js

import React from 'react';

function Register() {

  const handleSubmit = () => {
    // Submit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" placeholder="Email" aria-label="Email" />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" placeholder="Password" type="password" aria-label="Password" />
      
      <button type="submit">Register</button>  
    </form>
  );
}

export default Register;
// Pages/Login.js

import React from 'react';

function Login() {

  const handleSubmit = () => {
    // Submit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input name="email" id="email" placeholder="Email" aria-label="Email" />

      <label htmlFor="password">Password:</label>
      <input name="password" id="password" placeholder="Password" type="password" aria-label="Password" />

      <button type="submit">Login</button>  
    </form>
  );
}

export default Login;
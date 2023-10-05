// Pages/Login.js

import React from 'react';

function Login() {

  const handleSubmit = () => {
    // Submit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Login</button>  
    </form>
  );
}

export default Login;
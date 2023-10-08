import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Head';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        email: email,
        password: password,
      });

      const user = response.data;

      if(user.role === 'admin') {
        navigate("/admin");
      } else if (user.role === 'user') {
        navigate("/");
      }
    } catch(err) {
      setError(`Login error: ${err.message}`);
    }
  }

  return (
    <>
      <Header />
      {error && <div className="error-message">{error}</div>} 
    <form onSubmit={handleSubmit} >
      <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                <input 
                  type="email" 
                  id="typeEmailX-2" 
                  name="email"
                  className="form-control form-control-lg" 
                  onChange={(e) => setEmail(e.target.value)} 
                  aria-label="Enter your email"
                  autoComplete="email"
                  required 
      />
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
            <input 
              type="password" 
              id="typePasswordX-2" 
              name="password"
              className="form-control form-control-lg" 
              onChange={(e) => setPassword(e.target.value)} 
              aria-label="Enter your password"
              autoComplete="current-password"
              required 
      />
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
            </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>
      
                <button className="btn btn-primary btn-lg btn-block" type="submit" aria-label="Log in">Login</button>

                <Link to="/forgot-password" className="mb-3 d-block">Forgot your password?</Link>
                <hr className="my-4" />
                <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}} type="submit">
              <i className="fab fa-google me-2"></i><span>Sign in with Google</span>
            </button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}} type="submit">
              <i className="fab fa-facebook-f me-2"></i><span>Sign in with Facebook</span>
            </button>
                <div>Don't have an account? <Link to="/register">Register here</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </form>
  </>
  );
}

export default Login;
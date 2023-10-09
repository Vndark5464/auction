import React, { useState } from 'react';
import Header from '../components/Head';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = event => {
    // preventDefault is called to prevent a browser reload/refresh 
    event.preventDefault();
    if(password !== confirmPassword){
      setErrorMessage("Passwords do not match!");
    } else if (!agreedTerms){
      setErrorMessage("Please agree to terms!")
    } else {
      axios.post('http://localhost:3001/users', 
      {
         name: name,
         email: email,
         password: password,
      }).then( response => {
        if (response.data.status === 'success') {
          localStorage.setItem('loggedInUser', email); 
          setErrorMessage('Registration Successful!');
        } else {
          setErrorMessage('Error in Registration, try again later');
        }
      });
    }
  };
  return (
    
    <section className="vh-100" >
      <Header/>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <form onSubmit={register}>
                    <fieldset>
                      <div aria-live="polite">
                        {errorMessage && 
                          <p style={{color: 'red'}}>{errorMessage}</p>
                        }
                      </div>
                       <div className="form-outline mb-4">
                          <label for="nameInput">Name</label>
                          <input 
                            type="text" 
                            id="nameInput" 
                            className="form-control form-control-lg"
                            onChange={(e) => setName(e.target.value)} 
                            aria-label="Enter your name"
                            required 
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label for="emailInput">Email</label>
                          <input 
                            type="email" 
                            id="emailInput" 
                            className="form-control form-control-lg" 
                            onChange={(e) => setEmail(e.target.value)} 
                            aria-label="Enter your email"
                            required 
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label for="passwordInput">Password:</label>
                          <input 
                            type="password" 
                            id="passwordInput" 
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)} 
                            aria-label="Enter your password"
                            required 
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label for="confirmPasswordInput">Re-enter your password</label>
                          <input 
                            type="password" 
                            id="confirmPasswordInput" 
                            className="form-control form-control-lg" 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            aria-label="Enter your password again"
                            required 
                          />
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input 
                            className="form-check-input me-2" 
                            type="checkbox" 
                            value="" 
                            id="agreedTermsCheck"
                            onChange={() => setAgreedTerms(!agreedTerms)} 
                            aria-label="Agreement to terms of service"
                            required 
                          />
                          <label for="agreedTermsCheck">I agree to all terms of service</label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button 
                            type="submit" 
                            className="btn btn-success btn-block btn-lg"
                            aria-label="Submit registration"
                          >Register</button>
                        </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
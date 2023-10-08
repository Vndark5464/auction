import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import Header from '../../components/Head';

function UserProfile({username, avatarUrl }) {
    const navigate = useNavigate();
    const logout = () => {
    // Logic for logging out user goes here...
    navigate('/login');
  }
  
  return (
    <>
    <Header />
    <div className="profile-block container" aria-label="User Profile Page">
      <div className="panel text-center">
        <div className="user-heading" tabIndex="0">
          <Link to="/profile">
            <img src={avatarUrl} alt={`${username}'s avatar`} title={`${username}'s avatar`} className="rounded-circle mb-4" style={{width: "150px"}} />
          </Link>
          <h1>{username}</h1>
        </div>

        <nav aria-label="User Options">
          <ul className="nav nav-pills nav-stacked">
            <li><Link to="/profile" aria-label="Edit profile"><i className="fa fa-user" aria-hidden="true"></i>Edit Profile</Link></li>
            <li><Link to="/bank" className="active" aria-label="Bank details"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Bank</Link></li>
            <li><Link to="/settings" aria-label="Settings"><i className="fa fa-usd" aria-hidden="true"></i>Settings</Link></li>
            <li><Link to="/transactions" aria-label="Transaction history"><i className="fa fa-usd" aria-hidden="true"></i>Transaction History</Link></li>
            <li><button onClick={logout} aria-label="Logout"><span className="fa fa-sign-out" aria-hidden="true"></span>Logout</button></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}

export default UserProfile;
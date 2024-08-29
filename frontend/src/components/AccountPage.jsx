import Content from "./Content";
import Header from "./Header";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountPage = () => {
  const navigate = useNavigate();
    return(
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Company Logo" width="100" height="60" className="d-inline-block align-text-top" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watchlist">Watchlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">Account</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={() => navigate('/')}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

       <div>

            <Content/>
        </div>
        </div>
    );
}

export default AccountPage;
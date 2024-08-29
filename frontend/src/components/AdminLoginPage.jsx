import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css'; // Ensure this file contains necessary styles

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Perform admin authentication logic here
    // On success:
    navigate('/admin-dashboard'); // Adjust this path to match your admin dashboard route
  };

  return (
    <div className="auth-container" style={{ marginTop: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
        <img src="default-monochrome.svg" alt="logo" style={{ width: '200px', height: '150px' }} />
      </div>
      <div className="title" style={{ color: '#004080' }}>Admin Login</div>
      <form className="auth-form" onSubmit={handleAdminLogin}>
        <div className="field">
          <input type="text" placeholder="Admin Username" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Admin Password" required />
        </div>
        <div className="pass-link"><a href="#">Forgot password?</a></div>
        <div className="field btn">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;

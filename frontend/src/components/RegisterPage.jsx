import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    bankAccountNumber: '',
    confirmBankAccountNumber: '',
    bankName: '',
    bankBranch: '',
    ifscCode: '',
    panNumber: '',
    aadharNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement your registration logic here (e.g., API call)

    // On successful registration, navigate to dashboard
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Company Logo" width="100" height="60" className="d-inline-block align-text-top" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title text-center">Register</h3>
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input type="date" id="dob" name="dob" className="form-control" value={formData.dob} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                </form>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title text-center">Bank Details (KYC)</h4>
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="bankAccountNumber" className="form-label">Bank Account Number</label>
                    <input type="text" id="bankAccountNumber" name="bankAccountNumber" className="form-control" value={formData.bankAccountNumber} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmBankAccountNumber" className="form-label">Confirm Bank Account Number</label>
                    <input type="text" id="confirmBankAccountNumber" name="confirmBankAccountNumber" className="form-control" value={formData.confirmBankAccountNumber} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bankName" className="form-label">Bank Name</label>
                    <input type="text" id="bankName" name="bankName" className="form-control" value={formData.bankName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bankBranch" className="form-label">Bank Branch</label>
                    <input type="text" id="bankBranch" name="bankBranch" className="form-control" value={formData.bankBranch} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
                    <input type="text" id="ifscCode" name="ifscCode" className="form-control" value={formData.ifscCode} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="panNumber" className="form-label">PAN Number</label>
                    <input type="text" id="panNumber" name="panNumber" className="form-control" value={formData.panNumber} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="aadharNumber" className="form-label">Aadhar Number</label>
                    <input type="text" id="aadharNumber" name="aadharNumber" className="form-control" value={formData.aadharNumber} onChange={handleChange} required />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

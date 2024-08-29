import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ switchToSignIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
  });

  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1 for signup, 2 for OTP verification

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Check format

    axios.post('http://localhost:8080/user/send-otp', formData)
      .then(response => {
        toast.success(response.data);
        setStep(2); // Proceed to OTP verification step
      })
      .catch(error => {
        toast.error('Error sending OTP: ' + error.response?.data || error.message);
      });
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/user/validate-otp', null, {
      params: {
        email: formData.email,
        otp: otp,
      }
    })
    .then(response => {
      toast.success(response.data);
      // Switch to SignIn after successful registration
      setTimeout(() => {
        // Reset the state to show the sign-in form or refresh the page
        switchToSignIn();
      }, 3000);
    })
    .catch(error => {
      toast.error('OTP verification failed: ' + error.response?.data || error.message);
      // Optional: you can reset the form or keep the user on the OTP step
      // setStep(1); // This will reset to the sign-up step
      setTimeout(() => {
        // Optionally, you can reset the form or show the sign-in form
        setStep(1); // Go back to the sign-up form
        // or refresh the page:
        // window.location.reload(); // Uncomment to refresh the page
      }, 5000); // Delay of 3 seconds
    });
  };

  return (
    <div className="auth-container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
        <img src="default-monochrome.svg" alt="logo" style={{ width: '200px', height: '150px' }} />
      </div>
      <div className="title" style={{ color: '#004080' }}>Sign Up Form</div>
      {step === 1 && (
        <form className="auth-form scrollable-form" onSubmit={handleSignUp}>
          <div className="field">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="field">
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="field">
            <input 
              type="date" 
              name="dob" 
              placeholder="Date of Birth" 
              value={formData.dob} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="field">
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <input 
              type="text" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="field">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="field">
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword} 
              onChange={handleInputChange} 
              required 
            />
          </div><div className="field">
            <input 
              type="hidden" 
              name="role" 
              placeholder="Last Name" 
              value="ROLE_CUSTOMER"
            />
          </div>
          <div className="field btn">
            <input type="submit" value="Sign Up" />
          </div>
          <div className="signin-link">
            Already a member? <a href="#" onClick={switchToSignIn}>Login now</a>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="auth-form scrollable-form" onSubmit={handleOtpVerification}>
          <div className="field">
            <input 
              type="text" 
              name="otp" 
              placeholder="Enter OTP" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              required 
            />
          </div>
          <div className="field btn">
            <input type="submit" value="Verify OTP" />
          </div>
        </form>
      )}
      <ToastContainer /> {/* Add ToastContainer to display toasts */}
    </div>
  );
};

export default SignUp;

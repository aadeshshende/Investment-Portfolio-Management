import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginRegister.css";

const SignIn = ({ switchToSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Ensure the URL includes the protocol (http://)
      const response = await axios.post("http://localhost:8080/user/login", null, {
        params: {
          email: email,
          password: password,
        },
      });

      // Handle the response
      if (response.data.mesg === "Successful Auth!!!!") {
        // Navigate to the dashboard or another protected route
        sessionStorage.setItem("token",`Bearer ${response.data.jwt}`)
        navigate("/dashboard");
      } else {
        // If the response indicates failure, show an error
        setError("Invalid email or password");
      }
    } catch (error) {
      // Handle other possible errors (e.g., server issues)
      setError("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <div className="auth-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12vh",
        }}
      >
        <img
          src="default-monochrome.svg"
          alt="logo"
          style={{ width: "200px", height: "150px" }}
        />
      </div>
      <div className="title" style={{ color: "#004080" }}>
        Login Form
      </div>
      <form className="auth-form" onSubmit={handleSignIn}>
        <div className="field">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>
        <div className="field btn">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          Not a member?{" "}
          <a href="#" onClick={switchToSignUp}>
            Signup now
          </a>
        </div>
        <div
          className="admin-login-btn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href="#" onClick={handleAdminLogin}>
            Admin Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

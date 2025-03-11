import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.css";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    companyEmail: "",
    password: "",
    companyName: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.companyEmail)
      tempErrors.companyEmail = "Company email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (isRegistering && !formData.companyName)
      tempErrors.companyName = "Company name is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(isRegistering ? "Registration successful" : "Login successful");
    }
  };

  return (
    <div className="main_container">
      <div
        className={`login-signup-container ${
          isRegistering ? "register-mode" : ""
        }`}
      >
        <div className="info-section">
          <h2>{isRegistering ? "Register Your Business" : "Welcome Back !"}</h2>
          <p>
            {isRegistering ? "Already registered?" : "Don’t Have An Account?"}
          </p>
          <button className="toggle-btn" onClick={toggleForm}>
            {isRegistering ? "Login" : "Register"}
          </button>
        </div>

        <div className="form-section">
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <div className="input-container">
                <label className="label-required">
                  Company Name <span className="red-star">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.companyName && (
                  <div className="error-message">{errors.companyName}</div>
                )}
              </div>
            )}

            <div className="input-container">
              <label className="label-required">
                Company Email <span className="red-star">*</span>
              </label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                />
              </div>
              {errors.companyEmail && (
                <div className="error-message">{errors.companyEmail}</div>
              )}
            </div>

            <div className="input-container">
              <label className="label-required">
                Password <span className="red-star">*</span>
              </label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            {!isRegistering && (
              <div className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            )}

            <button className="mobile" onClick={toggleForm}>
              {isRegistering
                ? "You have Aleardy Account ?"
                : "Create Account Now !"}
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className={`action-btn ${
                isRegistering ? "register-btn" : "login-btn"
              }`}
            >
              <Link to="/"> {isRegistering ? "Register" : "Login"}</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

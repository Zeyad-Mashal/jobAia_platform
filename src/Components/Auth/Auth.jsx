import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.css";
import { Link } from "react-router-dom";
import RegisterAPI from "../../API/Auth/Register.api";
import LoginAPI from "../../API/Auth/Login.api";
const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const validate = () => {
    if (isRegistering == true) {
      if (companyName == "" && password == "" && email == "" && role == "") {
        alert("Please fill all the fields");
        return false;
      }
    } else {
      if (password == "" && email == "") {
        alert("Please fill all the fields");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (isRegistering) {
        const data = {
          CompanyName: companyName,
          email: email,
          password: password,
          role: role,
        };
        RegisterAPI(setLoading, setErrors, data, setIsRegistering);
      } else {
        const data = {
          email: email,
          password: password,
        };
        LoginAPI(setLoading, setErrors, data, navigate);
      }
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
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <div className="error-message">{errors.email}</div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            {isRegistering && (
              <div className="select_role">
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="Select Role">Select Role</option>
                  <option value="Basic">Basic</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            )}

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
              disabled={loading}
              type="submit"
              className={`action-btn ${
                isRegistering ? "register-btn" : "login-btn"
              }`}
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

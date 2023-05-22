import React, { useState, useEffect } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, email, password, confirmPassword]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const validateForm = () => {
    const isUsernameValid = username.trim().length>=6;
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 6 && /[A-Z]/.test(password) && /[!@#$*]/.test(password);
    const isConfirmPasswordValid = confirmPassword === password;

    setIsFormValid(
      isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsFormValid(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-main">
      <div className="signup-form">
      <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <input
              type="text"
              id="signup-username"
              className="signup-input-line"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            {username.trim().length > 0 && username.trim().length < 6 && (
            <p className="signup-error-msg">Username should be at least 6 characters long</p>
            )}
            <label htmlFor="signup-username" className="signup-input-label">
              Username
            </label>
          </div>
          <div className="signup-form-group">
            <input
              type="email"
              id="signup-email"
              className={`signup-input-line ${(!validateEmail(email) && isEmailFocused) ? 'invalid' : ''}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
            {(!validateEmail(email) && isEmailFocused) && (
              <p className="signup-error-msg">Please enter a valid email address</p>
            )}
            <label htmlFor="signup-email" className="signup-input-label">
              Email
            </label>
          </div>
          <div className="signup-form-group">
            <input
              type="password"
              id="signup-password"
              className={`signup-input-line ${
                password.length > 0 && password.length < 6 ? 'invalid' : ''
              }`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {password.length > 0 && password.length < 6 && (
              <p className="signup-error-msg">Password should be at least 6 characters long</p>
            )}
            <label htmlFor="signup-password" className="signup-input-label">
              Password
            </label>
          </div>
          <div className="signup-form-group">
            <input
              type="password"
              id="signup-confirmPassword"
              className={`signup-input-line ${
                confirmPassword.length > 0 && (!isFormValid || confirmPassword !== password)
                  ? 'invalid'
                  : ''
              }`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPassword.length > 0 && confirmPassword !== password && (
              <p className="signup-error-msg">Passwords should match</p>
            )}
            <label htmlFor="signup-confirmPassword" className="signup-input-label">
              Confirm Password
            </label>
          </div>
          <div className="signup-button-container">
            <button
              type="submit"
              className={`signup-submit-button ${isFormValid ? '' : 'disabled'}`}
              disabled={!isFormValid}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="password-policy">
          <h3>Password Policy:</h3>
          <ul>
            <li>Username and Password should be at least 6 characters long.</li>
            <li>Password must contain a combination of letters, numbers, and special characters.</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;

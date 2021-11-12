import React, { useState } from 'react';
import { useHistory } from 'react-router';

import './RegisterScreen.scss';

const RegisterScreen = () => {
  const [errorMsg, setError] = useState('');
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();

  function formSubmit(e) {
    e.preventDefault();
    console.log(input);
    history;

    if (input.password !== input.confirmPassword) {
      setError("Invalid Input or Passwords didn't match");
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      history.push('/');
    }
  }

  const handleChange = (e) => {
    setInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-form">
      <aside className="left-side">
        <h2>Sign Up</h2>
        <p>We do not share your personal details with anyone</p>
      </aside>
      <form className="right-side" onSubmit={formSubmit}>
        <input
          value={input.firstName}
          required
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          value={input.lastName}
          onChange={handleChange}
          required
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          value={input.email}
          onChange={handleChange}
          required
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          value={input.password}
          onChange={handleChange}
          required
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          minLength="6"
          placeholder="Password"
        />
        <input
          value={input.confirmPassword}
          onChange={handleChange}
          required
          type="password"
          name="confirmPassword"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          minLength="6"
          placeholder="Confirm Password"
        />
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default RegisterScreen;

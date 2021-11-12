import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import './LoginScreen.scss';

const LoginScreen = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const { authState, setAuthState, checkAuthState } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();
  function formSubmit(e) {
    e.preventDefault();
    if (input.email !== '' && input.password !== '') {
      const status = checkAuthState(input.email, input.password);
      if (status) {
        setAuthState(status);
        history.push('/');
      } else {
        setErrorMsg('Inputs incorrect');
        setTimeout(() => {
          setErrorMsg('');
        }, 3000);
      }
    } else {
      setErrorMsg('Inputs incorrect');
      setTimeout(() => {
        setErrorMsg('');
      }, 3000);
    }
  }

  return (
    <div className="login-form">
      <aside className="left-side">
        <h2>Sign In</h2>
        <p>Get access to your orders, wishlist and recommendations</p>
      </aside>
      <form className="right-side" onSubmit={formSubmit}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          minLength="6"
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginScreen;

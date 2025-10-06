import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // Dummy authentication logic
    if (!form.email || !form.password || (!isLogin && !form.username)) {
      setError('Please fill all required fields.');
      return;
    }
    // Simulate login/register
    localStorage.setItem('token', 'dummy-token');
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete={isLogin ? "current-password" : "new-password"}
        />
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <div className="auth-toggle">
        {isLogin ? (
          <span>
            Don't have an account?{' '}
            <button onClick={() => setIsLogin(false)}>Register</button>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Auth;
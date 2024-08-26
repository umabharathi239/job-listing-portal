import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this path is correct for your project

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser) {
      const { email, password } = formData;
      if (email === registeredUser.email && password === registeredUser.password) {
        setError('');
        localStorage.setItem('token', 'mock-token'); // Simulate storing a token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('No registered user found. Please register first.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <a className="link" href="/register">Don&apos;t have an account? Register</a>
    </div>
  );
};

export default Login;

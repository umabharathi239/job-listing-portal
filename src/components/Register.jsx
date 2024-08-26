import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure this path is correct for your project

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (name && email && password) {
      setError('');
      localStorage.setItem('registeredUser', JSON.stringify(formData));
      console.log('User registered:', formData);
      navigate('/login'); // Redirect to login page
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <a className="link" href="/login">Already have an account? Login</a>
    </div>
  );
};

export default Register;

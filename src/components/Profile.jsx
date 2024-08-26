import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Ensure the path matches the location of profile.css

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    contact: '',
    resume: ''
  });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch user profile data from backend
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', profileData.name);
      formData.append('email', profileData.email);
      formData.append('contact', profileData.contact);
      if (file) formData.append('resume', file);

      await axios.put('/api/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setSuccess('Profile updated successfully');
    } catch (error) {
      console.error('Profile update failed', error);
    }
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profileData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={profileData.contact}
          onChange={handleChange}
        />
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

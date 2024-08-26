import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate('/dashboard'); // Redirect to the general dashboard page
  };

  const handleHireClick = () => {
    navigate('/employer-dashboard'); // Redirect to the employer dashboard page
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          With <span className="highlight">CAREERAM</span>
        </h1>
        <p className="hero-description">
          Your Gateway to the Perfect Job
        </p>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for jobs by title, keyword, or location..." 
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="hero-buttons">
          <button className="btn job-btn" onClick={handleJobClick}>Want a Job?</button>
          <button className="btn hire-btn" onClick={handleHireClick}>Want to Hire?</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

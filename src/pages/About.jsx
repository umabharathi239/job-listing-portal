
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Connecting talent with opportunity through a modern job search experience.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>We aim to create a seamless and efficient platform that helps job seekers find the right opportunities and allows companies to discover the best talent effortlessly.</p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="image-wrapper">
              <img src="https://freedesignfile.com/upload/2017/06/Working-women-Stock-Photo-01.jpg" alt="Team Member" />
            </div>
            <h3>Hovina</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img src="https://th.bing.com/th/id/OIP.tL1dKiGcEl_zmAltMAiCDQAAAA?rs=1&pid=ImgDetMain" alt="Team Member" />
            </div>
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img src="https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-129005.jpg" alt="Team Member" />
            </div>
            <h3>Mary Johnson</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3>For Job Seekers</h3>
          <ul>
            <li>Sign Up: Create an account or log in.</li>
            <li>Search Jobs: Use the search functionality to find jobs.</li>
            <li>Apply: Apply directly through the portal.</li>
          </ul>
        </div>
        <div className="step">
          <h3>For Employers</h3>
          <ul>
            <li>Post Jobs: Easily post job listings.</li>
            <li>Review Candidates: Manage applications from a dedicated dashboard.</li>
            <li>Hire: Select the perfect candidate.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

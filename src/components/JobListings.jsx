
import "./JobListings.css";
const JobListings = () => {
  return (
    <div className="job-listings-container">
      <div className="job-listings-header">
        <h2>9387 Total Job Listings</h2>
      </div>

      <div className="job-card">
        <h3>Careeram Student Partner</h3>
        <p>Work From Home</p>
        <p>
          Start Date: <span>27th Aug2024 - 9th Oct2024</span>
        </p>
        <p>
          Duration: <span>8 Weeks</span>
        </p>
        <p>
          Stipend: <span>Performance Based</span>
        </p>
        <button>View Details</button>
      </div>

      <div className="job-card">
        <h3>Human Resources (HR)</h3>
        <p>Work From Home</p>
        <p>
          Duration: <span>3 Months</span>
        </p>
        <p>
          Stipend: <span>₹2,500/month + Incentives</span>
        </p>
        <button>View Details</button>
      </div>

      {/* Additional cards can be added here */}
    </div>
  );
};

export default JobListings;

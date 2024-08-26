
import PropTypes from 'prop-types';
import './MyDashboard.css'; // Import the CSS file for MyDashboard

const MyDashboard = ({ stats, jobListings, applications, notifications }) => {
  return (
    <div className="my-dashboard">
      <h1>Dashboard Overview</h1>

      <section className="quick-summary">
        <h2>Quick Summary</h2>
        <div className="summary-boxes">
          <div className="summary-box">
            <h3>Total Jobs Posted</h3>
            <p>{stats.totalJobs}</p>
          </div>
          <div className="summary-box">
            <h3>Applications Received</h3>
            <p>{stats.totalApplications}</p>
          </div>
          <div className="summary-box">
            <h3>New Jobs Today</h3>
            <p>{stats.newJobsToday}</p>
          </div>
          <div className="summary-box">
            <h3>Interviews Scheduled</h3>
            <p>{stats.interviewsScheduled}</p>
          </div>
        </div>
      </section>

      <section className="recent-jobs">
        <h2>Recent Job Listings</h2>
        <div className="job-listings">
          {jobListings.slice(0, 5).map((job) => (
            <div key={job.id} className="job-listing">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="upcoming-interviews">
        <h2>Upcoming Interviews</h2>
        <div className="interviews">
          {applications.filter(app => app.status === 'Interview Scheduled').map((app) => (
            <div key={app.id} className="interview">
              <h3>{app.jobTitle}</h3>
              <p>Interview for {app.applicantName}</p>
              <p>Status: {app.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="user-activity-feed">
        <h2>Activity Feed</h2>
        <div className="feed">
          {notifications.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification.message}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

MyDashboard.propTypes = {
  stats: PropTypes.shape({
    totalJobs: PropTypes.number.isRequired,
    totalApplications: PropTypes.number.isRequired,
    newJobsToday: PropTypes.number.isRequired,
    interviewsScheduled: PropTypes.number.isRequired
  }).isRequired,
  jobListings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      jobTitle: PropTypes.string.isRequired,
      applicantName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MyDashboard;

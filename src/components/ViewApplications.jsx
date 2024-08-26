import { useState } from 'react';
import './ViewApplications.css';

const ViewApplications = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', jobTitle: 'Software Engineer', status: 'New', dateApplied: '2024-08-20' },
    { id: 2, name: 'Jane Smith', jobTitle: 'Product Manager', status: 'Shortlisted', dateApplied: '2024-08-19' },
    { id: 3, name: 'Sam Wilson', jobTitle: 'UX Designer', status: 'Rejected', dateApplied: '2024-08-18' },
    { id: 4, name: 'Alex Johnson', jobTitle: 'Backend Developer', status: 'New', dateApplied: '2024-08-21' },
    { id: 5, name: 'Emma Brown', jobTitle: 'Data Scientist', status: 'Shortlisted', dateApplied: '2024-08-22' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="applications-section">
      <div className="applications-header">
        <h2>View Applications</h2>
        <div className="controls">
          <input type="text" placeholder="Search applications..." className="search-bar" />
          <select className="status-filter">
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
          </select>
          <input type="date" className="date-picker" />
        </div>
      </div>
      <div className="applications-list">
        {applications.map(app => (
          <div key={app.id} className="application-card">
            <div className="applicant-info">
              <div className="applicant-photo"></div>
              <div className="applicant-details">
                <h3>{app.name}</h3>
                <p>{app.jobTitle}</p>
                <p className="date-applied">Applied on: {new Date(app.dateApplied).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="application-right">
              <div className={`status-tag ${app.status.toLowerCase()}`}>{app.status}</div>
              <div className="application-actions">
                <button onClick={() => handleStatusChange(app.id, 'Shortlisted')}>Shortlist</button>
                <button onClick={() => handleStatusChange(app.id, 'Rejected')}>Reject</button>
                <button>View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewApplications;

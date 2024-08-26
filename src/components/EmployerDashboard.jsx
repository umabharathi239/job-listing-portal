import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobPostings from './JobPostings';
import ViewApplications from './ViewApplications';
import CandidateSearch from './CandidateSearch';
import AnalyticsReports from './AnalyticsReports';
import CommunicationTools from './CommunicationTools';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('JobPostings');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Navigate to login on logout
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'viewApplications':
        return <ViewApplications />;
      case 'candidateSearch':
        return <CandidateSearch />;
      case 'analyticsReports':
        return <AnalyticsReports />;
      case 'communicationTools':
        return <CommunicationTools />;
      default:
        return <JobPostings />;
    }
  };

  return (
    <div className="employer-dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Employer Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li
              onClick={() => setActiveComponent('JobPostings')}
              className={activeComponent === 'JobPostings' ? 'active' : ''}
            >
              Postings Management
            </li>
            <li
              onClick={() => setActiveComponent('viewApplications')}
              className={activeComponent === 'viewApplications' ? 'active' : ''}
            >
              View Applications
            </li>
            <li
              onClick={() => setActiveComponent('candidateSearch')}
              className={activeComponent === 'candidateSearch' ? 'active' : ''}
            >
              Candidate Search
            </li>
            <li
              onClick={() => setActiveComponent('analyticsReports')}
              className={activeComponent === 'analyticsReports' ? 'active' : ''}
            >
              Analytics and Reports
            </li>
            <li
              onClick={() => setActiveComponent('communicationTools')}
              className={activeComponent === 'communicationTools' ? 'active' : ''}
            >
              Communication Tools
            </li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="content-container">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
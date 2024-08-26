import { useState } from 'react';
import SearchBar from './SearchBar';
import JobListings from './JobListings';
import Filters from './Filters';
import ApplicationStatus from './ApplicationStatus';
import SavedJobs from './SavedJobs';
import RecommendedJobs from './RecommendedJobs';
import Profile from './Profile';
import { FaBell } from 'react-icons/fa'; // Import the bell icon
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('jobListings');
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [stipend, setStipend] = useState(0);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'New job posting for Software Engineer' },
    { id: 2, message: 'Application deadline approaching for Product Manager' }
  ]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'applicationStatus':
        return <ApplicationStatus />;
      case 'savedJobs':
        return <SavedJobs />;
      case 'recommendedJobs':
        return <RecommendedJobs />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <>
            <Filters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              location={location}
              setLocation={setLocation}
              workFromHome={workFromHome}
              setWorkFromHome={setWorkFromHome}
              partTime={partTime}
              setPartTime={setPartTime}
              stipend={stipend}
              setStipend={setStipend}
            />
            <JobListings
              searchTerm={searchTerm}
              location={location}
              workFromHome={workFromHome}
              partTime={partTime}
              stipend={stipend}
            />
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li
              onClick={() => setActiveComponent('jobListings')}
              className={activeComponent === 'jobListings' ? 'active' : ''}
            >
              Job Listings
            </li>
            <li
              onClick={() => setActiveComponent('applicationStatus')}
              className={activeComponent === 'applicationStatus' ? 'active' : ''}
            >
              Application Status
            </li>
            <li
              onClick={() => setActiveComponent('savedJobs')}
              className={activeComponent === 'savedJobs' ? 'active' : ''}
            >
              Saved Jobs
            </li>
            <li
              onClick={() => setActiveComponent('recommendedJobs')}
              className={activeComponent === 'recommendedJobs' ? 'active' : ''}
            >
              Recommended Jobs
            </li>
            <li
              onClick={() => setActiveComponent('profile')}
              className={activeComponent === 'profile' ? 'active' : ''}
            >
              Profile
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <SearchBar />
        <div className="job-alert-container">
          <FaBell
            className="bell-icon"
            onClick={() => setIsAlertsOpen(!isAlertsOpen)}
          />
          {isAlertsOpen && (
            <div className="alerts-dropdown">
              <h3>Job Alerts</h3>
              {alerts.length === 0 ? (
                <p>No new alerts</p>
              ) : (
                <ul>
                  {alerts.map(alert => (
                    <li key={alert.id}>{alert.message}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="content-container">
            {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

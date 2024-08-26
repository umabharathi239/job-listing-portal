import { useState } from 'react';
import './ApplicationStatus.css'; // Import the CSS file for ApplicationStatus

const ApplicationStatus = () => {
  // Example data
  const initialApplications = [
    { id: 1, jobTitle: 'Software Engineer', status: 'Applied', date: '2024-08-01' },
    { id: 2, jobTitle: 'Product Manager', status: 'Interview Scheduled', date: '2024-08-10' },
    { id: 3, jobTitle: 'UX Designer', status: 'Rejected', date: '2024-08-15' },
  ];

  // State
  // eslint-disable-next-line no-unused-vars
  const [applications, setApplications] = useState(initialApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Filter and Sort Applications
  const filteredApplications = applications
    .filter(app =>
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a[sortBy]) - new Date(b[sortBy]);
      } else {
        return new Date(b[sortBy]) - new Date(a[sortBy]);
      }
    });

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Sorting
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // Example Action Handlers
  const handleUpdate = (id) => {
    alert(`Update application ${id}`);
  };

  const handleWithdraw = (id) => {
    alert(`Withdraw application ${id}`);
  };

  return (
    <div className="application-status">
      <h2>Application Status</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by job title or status"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('jobTitle')}>Job Title</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th onClick={() => handleSort('date')}>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.jobTitle}</td>
              <td>{app.status}</td>
              <td>{app.date}</td>
              <td>
                <button onClick={() => handleUpdate(app.id)} className="update-button">Update</button>
                <button onClick={() => handleWithdraw(app.id)} className="withdraw-button">Withdraw</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationStatus;

import { useState } from 'react';
import './JobPostings.css';

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([
    { id: 1, title: 'Software Engineer', location: 'Mumbai', status: 'Open', views: 120, applications: 8, datePosted: '2024-08-01' },
    { id: 2, title: 'Product Manager', location: 'Bangalore', status: 'Closed', views: 80, applications: 15, datePosted: '2024-07-25' },
    { id: 3, title: 'UX Designer', location: 'Pune', status: 'Open', views: 95, applications: 10, datePosted: '2024-07-20' },
    { id: 4, title: 'Data Analyst', location: 'Hyderabad', status: 'Open', views: 130, applications: 20, datePosted: '2024-08-05' },
    { id: 5, title: 'DevOps Engineer', location: 'Chennai', status: 'Closed', views: 60, applications: 5, datePosted: '2024-07-30' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleEdit = (id) => {
    console.log('Edit job posting with id:', id);
  };

  const handleDelete = (id) => {
    setJobPostings(jobPostings.filter(job => job.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setJobPostings(jobPostings.map(job => job.id === id ? { ...job, status: newStatus } : job));
  };

  const filteredJobPostings = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || job.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="job-postings">
      <h2><b>Manage Postings</b></h2>

      <div className="controls-container">
        <input 
          type="text" 
          placeholder="Search job postings..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search-bar" 
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="status-filter">
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div className="job-cards-container">
        {filteredJobPostings.map(job => (
          <div key={job.id} className={`job-card ${job.status.toLowerCase()}`}>
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p className="date-posted">Posted on: {new Date(job.datePosted).toLocaleDateString()}</p>
              <span className={`status-tag ${job.status.toLowerCase()}`}>{job.status}</span>
            </div>
            <div className="job-stats">
              <p>Views: {job.views}</p>
              <p>Applications: {job.applications}</p>
            </div>
            <div className="job-actions">
              <button onClick={() => handleEdit(job.id)}>Edit</button>
              <button onClick={() => handleStatusChange(job.id, job.status === 'Open' ? 'Closed' : 'Open')}>
                {job.status === 'Open' ? 'Close' : 'Open'}
              </button>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostings;

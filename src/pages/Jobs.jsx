import { useState } from 'react';
import './Jobs.css';

const Jobs = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleJobTypeChange = (e) => setJobType(e.target.value);
  const clearFilters = () => {
    setCategory('');
    setLocation('');
    setJobType('');
  };

  const growingCompanies = [
    { name: 'Google', position: 'Software Engineer', location: 'Mountain View, CA', jobType: 'Full-time' },
    { name: 'Microsoft', position: 'Cloud Solution Architect', location: 'Redmond, WA', jobType: 'Full-time' },
    { name: 'Salesforce', position: 'Marketing Specialist', location: 'San Francisco, CA', jobType: 'Full-time' },
    { name: 'Amazon', position: 'Operations Manager', location: 'Seattle, WA', jobType: 'Full-time' },
    { name: 'IBM', position: 'Business Analyst', location: 'Armonk, NY', jobType: 'Full-time' },
    { name: 'Adobe', position: 'Graphic Designer', location: 'San Jose, CA', jobType: 'Full-time' },
    { name: 'Shopify', position: 'Full-Stack Developer', location: 'Toronto, Canada', jobType: 'Full-time' },
    { name: 'HubSpot', position: 'Content Strategist', location: 'Boston, MA', jobType: 'Full-time' },
    { name: 'Twitter', position: 'Data Engineer', location: 'San Francisco, CA', jobType: 'Full-time' },
    { name: 'Slack', position: 'Software Developer', location: 'San Francisco, CA', jobType: 'Full-time' },
  ];

  return (
    <div className="browse-jobs-container">
      {/* Header Section */}
      <header className="browse-header">
        <h1>Browse Jobs</h1>
        <p>Find the job that fits your passion and skillset.</p>
      </header>

      <div className="browse-content">
        {/* Filters Section */}
        <aside className="filters-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Category</label>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Location</label>
            <select value={location} onChange={handleLocationChange}>
              <option value="">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Job Type</label>
            <select value={jobType} onChange={handleJobTypeChange}>
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <button className="clear-filters" onClick={clearFilters}>
            Clear Filters
          </button>
        </aside>

        {/* Job Listings Section */}
        <main className="job-listings">
          {growingCompanies.map((company, index) => (
            <div key={index} className="job-card">
              <div className="job-info">
                <h3>{company.position}</h3>
                <p>{company.name} - {company.location}</p>
              </div>
              <div className="job-meta">
                <span>{company.jobType}</span>
                <button>Apply Now</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Jobs;

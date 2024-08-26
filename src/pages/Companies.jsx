import { useState } from 'react';
import './Companies.css';
import googleLogo from '../assets/google-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';
import amazonLogo from '../assets/amazon-logo.png';
import netflixLogo from '../assets/netflix-logo.png';
import appleLogo from '../assets/apple-logo.png';

const Companies = () => {
  const [filters, setFilters] = useState({
    industry: 'All Industries',
    location: 'All Locations',
    size: 'Any Size',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      industry: 'All Industries',
      location: 'All Locations',
      size: 'Any Size',
    });
  };

  const topCompanies = [
    { name: 'Google', logo: googleLogo, industry: 'Technology', location: 'Mountain View, CA' },
    { name: 'Microsoft', logo: microsoftLogo, industry: 'Technology', location: 'Redmond, WA' },
    { name: 'Amazon', logo: amazonLogo, industry: 'E-commerce', location: 'Seattle, WA' },
    { name: 'Netflix', logo: netflixLogo, industry: 'Entertainment', location: 'Los Gatos, CA' },
    { name: 'Apple', logo: appleLogo, industry: 'Technology', location: 'Cupertino, CA' },
  ];

  return (
    <div className="companies-page">
      {/* Banner Section */}
      <div className="companies-banner">
        <h1>Top Companies</h1>
        <p>Explore the leading companies and see what they have to offer.</p>
      </div>

      <div className="companies-content">
        {/* Filters Section */}
        <aside className="filters-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Industry</label>
            <select name="industry" value={filters.industry} onChange={handleFilterChange}>
              <option>All Industries</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>E-commerce</option>
              <option>Entertainment</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Location</label>
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option>All Locations</option>
              <option>Mountain View, CA</option>
              <option>Redmond, WA</option>
              <option>Seattle, WA</option>
              <option>Los Gatos, CA</option>
              <option>Cupertino, CA</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Company Size</label>
            <select name="size" value={filters.size} onChange={handleFilterChange}>
              <option>Any Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </aside>

        {/* Company Profiles Section */}
        <main className="company-listings">
          {topCompanies.map((company) => (
            <div key={company.name} className="company-card">
              <div className="company-logo">
                <img src={company.logo} alt={`${company.name} Logo`} />
              </div>
              <div className="company-info">
                <h3>{company.name}</h3>
                <p>{company.industry} - {company.location}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Companies;

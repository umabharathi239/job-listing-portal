import PropTypes from 'prop-types';
import './Filters.css';

const Filters = ({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  workFromHome,
  setWorkFromHome,
  partTime,
  setPartTime,
  stipend,
  setStipend
}) => {
  return (
    <div className="filters-container">
      <h2>Filters</h2>
      
      <div className="filter-group">
        <label htmlFor="profile">Profile</label>
        <input
          id="profile"
          type="text"
          placeholder="e.g. Software Engineer"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="e.g. Chennai"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <input
          type="checkbox"
          id="work-from-home"
          checked={workFromHome}
          onChange={(e) => setWorkFromHome(e.target.checked)}
        />
        <label htmlFor="work-from-home">Work from home</label>
      </div>
      
      <div className="filter-group">
        <input
          type="checkbox"
          id="part-time"
          checked={partTime}
          onChange={(e) => setPartTime(e.target.checked)}
        />
        <label htmlFor="part-time">Part-time</label>
      </div>
      
      <div className="filter-group">
        <label htmlFor="stipend">Desired minimum monthly stipend (₹)</label>
        <input
          id="stipend"
          type="range"
          min="0"
          max="10000"
          value={stipend}
          onChange={(e) => setStipend(e.target.value)}
        />
        <span>{stipend}</span>
      </div>
      
      <button
        className="clear-filters"
        onClick={() => {
          setSearchTerm('');
          setLocation('');
          setWorkFromHome(false);
          setPartTime(false);
          setStipend(0);
        }}
      >
        Clear all
      </button>
    </div>
  );
};
Filters.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  workFromHome: PropTypes.bool.isRequired,
  setWorkFromHome: PropTypes.func.isRequired,
  partTime: PropTypes.bool.isRequired,
  setPartTime: PropTypes.func.isRequired,
  stipend: PropTypes.number.isRequired,
  setStipend: PropTypes.func.isRequired
};
export default Filters;

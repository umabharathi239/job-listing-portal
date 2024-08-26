import { useState } from 'react';
import './CandidateSearch.css';

const CandidateSearch = () => {
  // eslint-disable-next-line no-unused-vars
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'John Doe', role: 'Software Engineer', skills: ['React', 'Node.js', 'JavaScript'], location: 'Mumbai', experience: '3 Years', availability: 'Available', image: '/images/john.png' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager', skills: ['Agile', 'Scrum', 'Leadership'], location: 'Bangalore', experience: '5 Years', availability: 'Not Available', image: '/images/jane.png' },
    { id: 3, name: 'Sam Wilson', role: 'UX Designer', skills: ['Figma', 'Sketch', 'UI/UX'], location: 'Pune', experience: '4 Years', availability: 'Available', image: '/images/sam.png' },
    { id: 4, name: 'Emily Johnson', role: 'Data Scientist', skills: ['Python', 'ML', 'Statistics'], location: 'Delhi', experience: '2 Years', availability: 'Available', image: '/images/emily.png' },
    { id: 5, name: 'Michael Lee', role: 'DevOps Engineer', skills: ['AWS', 'Docker', 'Kubernetes'], location: 'Hyderabad', experience: '6 Years', availability: 'Not Available', image: '/images/michael.png' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'All' || candidate.role === filterRole;
    const matchesLocation = filterLocation === 'All' || candidate.location === filterLocation;
    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <div className="enhanced-candidate-search">
      <div className="search-controls">
        <input 
          type="text" 
          placeholder="Search by name, skills..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search-bar" 
        />
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className="role-filter">
          <option value="All">All Roles</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
        </select>
        <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} className="location-filter">
          <option value="All">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      <div className="candidate-cards-container">
        {filteredCandidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <div className="candidate-image">
              <img src={candidate.image} alt={`${candidate.name}`} />
            </div>
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <p className="role">{candidate.role}</p>
              <p className="location">{candidate.location}</p>
              <p className="experience">Experience: {candidate.experience}</p>
              <p className="skills">Skills: {candidate.skills.join(', ')}</p>
              <p className={`availability ${candidate.availability === 'Available' ? 'available' : 'not-available'}`}>
                {candidate.availability}
              </p>
            </div>
            <div className="candidate-actions">
              <button className="view-profile">View Profile</button>
              <button className="shortlist">Shortlist</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination/Infinite Scroll could be implemented here */}
    </div>
  );
};

export default CandidateSearch;

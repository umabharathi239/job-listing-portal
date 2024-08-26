import './SearchBar.css'; // Import the CSS file for SearchBar

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;

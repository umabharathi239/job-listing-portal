
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import logo from '../assets/careeram.png'; // Adjust the path as necessary
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Careeram Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/jobs">Browse Jobs</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/blog">Blog/Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

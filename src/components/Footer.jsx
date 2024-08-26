import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <p>&copy; 2024 Careeram. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

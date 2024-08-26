import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a form submission (e.g., send data to a backend)
    // For demonstration purposes, we'll just show the success message
    setMessageSent(true);

    // Optionally, reset the form after submission
    e.target.reset();

    // Hide the message after some time (optional)
    setTimeout(() => {
      setMessageSent(false);
    }, 5000); // Hide message after 5 seconds
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <header className="contact-hero">
        <h1>Get in Touch with Us</h1>
        <p>We’re here to help. Reach out to us anytime.</p>
      </header>

      <div className="contact-content">
        {/* Contact Form and Contact Details Side-by-Side */}
        <div className="contact-section">
          {/* Contact Form */}
          <section className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
              {messageSent && (
                <p className="message-success">Message sent successfully!</p>
              )}
            </form>
          </section>

          {/* Contact Details */}
          <aside className="contact-details">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of the following channels:</p>
            <ul>
              <li>
                <i className="fas fa-phone-alt"></i>
                +1 234 567 890
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                contact@jobportal.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                123 Job Street, City, Country
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;

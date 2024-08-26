import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>Careeram helped me land my dream job in just a few weeks!</p>
          <p>- John Doe, Software Engineer</p>
        </div>
        <div className="testimonial">
          <p>I found the perfect candidate for our open position. Highly recommend!</p>
          <p>- Jane Smith, HR Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

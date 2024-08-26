import './Blog.css';
import jobinterview from '../assets/job-interview.jpg'; // Ensure the extension is correct
import remotework from '../assets/remote-work.jpg';
import future2024 from '../assets/future-2024.jpeg';

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Hero Section */}
      <header className="blog-hero">
        <h1>Latest Insights & Resources</h1>
        <p>Stay updated with industry trends and career advice.</p>
      </header>

      <div className="blog-content">
        {/* Sidebar Section */}
        <aside className="blog-sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Career Advice</li>
            <li>Industry Insights</li>
            <li>Remote Work</li>
            <li>Interview Tips</li>
            <li>Company Culture</li>
          </ul>
        </aside>

        {/* Blog Posts Section */}
        <main className="blog-posts">
          <article className="blog-card">
            <img src={jobinterview} alt="Job Interview" />
            <h3>5 Tips for Acing Your Next Job Interview</h3>
            <p>Learn actionable strategies to impress employers and secure your dream job.</p>
            <button>Read More</button>
          </article>

          <article className="blog-card">
            <img src={remotework} alt="Remote Work" />
            <h3>Remote Work: The Future of Productivity</h3>
            <p>Explore why remote work is becoming a staple in modern business and how to make the most of it.</p>
            <button>Read More</button>
          </article>

          <article className="blog-card">
            <img src={future2024} alt="Skills" />
            <h3>Top 10 Skills Employers Are Looking For in 2024</h3>
            <p>Discover the key skills that will set you apart in the job market and help you advance your career.</p>
            <button>Read More</button>
          </article>

          {/* Add more blog cards here */}
        </main>
      </div>
    </div>
  );
};

export default Blog;

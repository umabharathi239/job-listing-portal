import './JobCategories.css';

const JobCategories = () => {
  return (
    <section className="job-categories">
      <h2>Popular Job Categories</h2>
      <div className="categories-container">
        <div className="category">
          <a href="/jobs/it">IT & Software</a>
        </div>
        <div className="category">
          <a href="/jobs/finance">Finance</a>
        </div>
        <div className="category">
          <a href="/jobs/healthcare">Healthcare</a>
        </div>
        <div className="category">
          <a href="/jobs/education">Education</a>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;

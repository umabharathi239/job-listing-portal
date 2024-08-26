import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JobCategories from './components/JobCategories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import EmployerDashboard from './components/EmployerDashboard';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');
  return token ? <Element /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected routes */}
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/employer-dashboard" element={<PrivateRoute element={EmployerDashboard} />} />

        {/* Default route */}
        <Route
          path="/"
          element={
            localStorage.getItem('token') ? (
              <div className="App">
                <Header />
                <HeroSection />
                <JobCategories />
                <HowItWorks />
                <Testimonials />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
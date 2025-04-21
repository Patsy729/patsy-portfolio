import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import NotFound from '../pages/NotFound'; // Restore NotFound import

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page as homepage */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} /> {/* Restore NotFound route */}
      </Routes>
    </div>
  );
};

export default AppRoutes;

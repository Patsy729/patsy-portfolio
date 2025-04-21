import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
// import NotFound from '../pages/NotFound'; // Temporarily remove NotFound import

const AppRoutes = () => {
  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ensure HomePage is routed correctly */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFound />} /> */} {/* Temporarily remove NotFound route */}
      </Routes>
    </div>
  );
};

export default AppRoutes;

import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';

const AppRoutes = () => {
  return (
    <div className="flex-grow">
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <EducationPage />
      <ContactPage />
    </div>
  );
};

export default AppRoutes; 
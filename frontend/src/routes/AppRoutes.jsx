import { Routes, Route } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import HomePage from '../components/HomePage';
import ServicesPage from '../components/ServicesPage';
import SkillsPage from '../components/SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ContactPage from '../components/ContactPage';
import LandingPage from '../components/LandingPage';

const AppRoutes = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-[#1a0f1a] text-white' 
        : 'bg-white text-[#1a1a1a]'
    }`}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={
          <main className={`transition-colors duration-300 ${
            isDark 
              ? 'bg-[#1a0f1a]' 
              : 'bg-white'
          }`}>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        } />
      </Routes>
    </div>
  );
};

export default AppRoutes; 
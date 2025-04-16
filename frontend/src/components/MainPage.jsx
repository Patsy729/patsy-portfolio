import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';

const MainPage = () => {
  return (
    <div>
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="education">
        <EducationPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default MainPage;

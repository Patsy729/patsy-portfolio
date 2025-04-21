import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';

const MainPage = () => {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="education">
        <EducationPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default MainPage;

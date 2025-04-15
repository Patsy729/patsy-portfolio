import React, { useState } from 'react'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX');

  const categories = ['UI/UX', 'Graphic Design', 'Branding'];

  const projects = [
    {
      title: "Hamuntu",
      category: "UI/UX",
      tags: ["UX Case Study", "Responsive Design"],
      image: "/hamuntu.png",
      description: "A web app for managing school clubs. Features event scheduling, member tracking, announcements, and document sharing in one intuitive platform. Simplifies organization and boosts student engagement",
      figmaLink: "https://www.figma.com/design/m0y8sW7efQvWF6tJcOeTxL/UI-UX-DESIGN?node-id=0-1"
    },
    {
      title: "PARO",
      category: "UI/UX",
      tags: ["UI Design", "Website Design"],
      image: "/paro.png",
      description: "A community-driven web app designed to connect people, foster engagement, and facilitate collaboration within local or interest-based groups.",
      figmaLink: "https://www.figma.com/design/m0y8sW7efQvWF6tJcOeTxL/UI-UX-DESIGN?node-id=2-5939"
    },
    {
      title: "MATA",
      category: "UI/UX",
      tags: ["Dashboard", "UI Design"],
      image: "/mata.png",
      description: "Mata is a lightweight web app that helps teachers quickly see which students are late by tracking their location when they enter school grounds.",
      figmaLink: "https://www.figma.com/design/m0y8sW7efQvWF6tJcOeTxL/UI-UX-DESIGN?node-id=1-2625"
    },
    // Graphic Design Projects
    {
      title: "Farm Honey Product",
      category: "Graphic Design",
      tags: ["Product Design", "Branding"],
      image: "/farmhoney.jpg",
      description: "Product design and branding for Farm Honey, featuring natural honey bee products with FDA certification.",
    },
    {
      title: "Wild Honey Product",
      category: "Graphic Design",
      tags: ["Product Design", "Branding"],
      image: "/wildhoney.jpg",
      description: "Product design and branding for Wild Honey, featuring natural sweetener from wildflowers.",
    },
    {
      title: "Exam Motivation - Prefinals",
      category: "Graphic Design",
      tags: ["Social Media", "Educational"],
      image: "/prefinals.jpg",
      description: "Motivational design for BS Information Technology students during prefinals week.",
    },
    {
      title: "Exam Motivation - High Scores",
      category: "Graphic Design",
      tags: ["Social Media", "Educational"],
      image: "/midterms.jpg",
      description: "Motivational design featuring exam preparation checklist and success quote.",
    },
    {
      title: "Second Semester Announcement",
      category: "Graphic Design",
      tags: ["Social Media", "Educational"],
      image: "/secondsem.jpg",
      description: "Creative announcement design for the upcoming second semester.",
    },
    // Branding Projects
    {
      title: "MATA Logo Design",
      category: "Branding",
      tags: ["Logo Design", "Brand Identity"],
      image: "/Mata Branding.png",
      description: "A minimalist and modern logo design for MATA, featuring a distinctive 'M' shape in a fresh green color palette that represents growth and reliability.",
    },
    {
      title: "YO HONEY Brand Identity",
      category: "Branding",
      tags: ["Logo Design", "Brand Identity"],
      image: "/YoHoney Branding.jpg",
      description: "Natural honey bee brand identity featuring a playful bee icon integrated into the typography, with warm golden tones reflecting the natural essence of honey.",
    },
    {
      title: "Hamuntu Logo Design",
      category: "Branding",
      tags: ["Logo Design", "Brand Identity"],
      image: "/Hamuntu Branding.png",
      description: "Modern and dynamic logo design for Hamuntu, combining puzzle pieces in red and blue to symbolize connection and community engagement.",
    }
  ];

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <div id="projects" className="bg-[#fefefe] min-h-screen pt-16 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a0f1a]">
            Lets have a look at my <span className="text-[#ff00ff]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Explore my design services, from user interface and top-notched visual designs. Let's craft exceptional digital experiences together.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#ff00ff] text-white'
                  : 'bg-white text-gray-800 border border-[#ff00ff]/20 hover:border-[#ff00ff]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 ${
                  selectedCategory === 'Graphic Design' ? 'object-contain' : 'object-cover'
                }`}
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-[#ff00ff]/10 text-[#ff00ff] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a0f1a]">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#ff00ff] hover:underline text-sm font-medium"
                  >
                    View on Figma
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-10l6 6m0 0l-6-6m6 6v6m-6-6h6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default ProjectsPage 
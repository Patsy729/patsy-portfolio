import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hamuntu",
      description: "A web app for managing school clubs. Features event scheduling, member tracking, announcements, and document sharing in one intuitive platform. Simplifies organization and boosts student engagement",
      image: "/hamuntu.png",
      fullDescription: "A comprehensive web application designed to streamline school club management and enhance student engagement.\n\nKey Features:\n• Event Scheduling: Easily plan and manage club activities and meetings\n• Member Management: Track membership, attendance, and participation\n• Document Sharing: Central hub for club resources and materials\n• Announcements: Keep members informed with real-time updates\n• Intuitive Interface: User-friendly design for students and club leaders"
    },
    {
      title: "Paro",
      description: "A community-driven web app designed to connect people, foster engagement,",
      image: "/paro.png",
      fullDescription: "A community-driven web app designed to connect people, foster engagement, and facilitate collaboration within local or interest-based groups.\n\nKey Features:\n• Community Hub: Create or join groups based on shared interests, locations, or goals.\n• Event Management: Organize and RSVP for local meetups, workshops, or virtual events.\n• Discussion Forums: Share ideas, ask questions, and engage in meaningful conversations.\n• Resource Sharing: Upload and access files, guides, or helpful links within the community.\n• Messaging & Networking: Direct chat and group messaging to stay connected.\n• User Profiles: Customizable profiles to showcase skills, interests, and contributions.\n• Moderation Tools:Admins can manage members, content, and ensure a safe environment."
    },
    {
      title: "Mata",
      description: "Mata is a lightweight web app that helps teachers quickly see which students are late by tracking their location when they enter school grounds.",
      image: "/mata.png",
      fullDescription: "Mata is a lightweight web app that helps teachers quickly see which students are late by tracking their location when they enter school grounds. No extra clutter - just a real-time status update for classroom management.\n\nKey Features:\n• Live Location Tracking: Detects when students arrive on campus via GPS/Wi-Fi. Updates their status in real-time (e.g., 'On Time' or 'Late').\n• Late Student Alerts (Teacher View): Teachers see a red/yellow/green indicator or list of late students."
    },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-[#1a0f1a]' : 'bg-[#fefefe]'}`}>
      {/* Projects Header */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-16 text-center ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>
          My <span className="text-[#ff00ff]">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Card */}
              <div className={`rounded-lg overflow-hidden border border-[#ff00ff] ${
                isDark ? 'bg-[#1a0f1a]' : 'bg-white'
              }`}>
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="p-3">
                  <h3 className={`text-base font-semibold mb-1.5 ${
                    isDark ? 'text-white' : 'text-[#1a0f1a]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-[11px] mb-3 line-clamp-2 leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* View More Button */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-1.5 px-3 bg-[#ff00ff] text-white rounded-full text-xs font-medium 
                      transition-all duration-300 hover:bg-[#ff40ff]"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 pb-20 overflow-hidden">
          <div 
            className="fixed inset-0 transition-opacity"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
          </div>

          <div className="relative w-full max-w-md transform overflow-hidden rounded-xl border-2 border-[#ff00ff] bg-[#1a0f1a] shadow-2xl">
            {/* Modal Image */}
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-[#ff00ff] text-white hover:bg-[#ff40ff] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">
                {selectedProject.title}
              </h3>
              
              <div className="space-y-2 text-gray-300 whitespace-pre-line text-xs">
                {selectedProject.fullDescription}
              </div>
            </div>
          </div>
        </div>
      )}

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
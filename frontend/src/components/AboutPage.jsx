import React from 'react';
import patsyImage from '../../public/patsy.png';
import canvaImage from '../../public/canva.png';
import slackImage from '../../public/slack.png';

// Example SVGs (replace with actual icons or library components)
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const AvailabilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-green-500" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="10" />
  </svg>
);

const AboutPage = () => {
  const services = [
    {
      number: "01",
      title: "Branding Design",
      description: "Crafting unique logos, business cards, brand guidelines, and visual identities to help businesses stand out."
    },
    {
      number: "02",
      title: "Meeting Coordination",
      description: "Scheduling, organizing, and managing meetings efficiently (calendar management, reminders, and follow-ups)."
    },
    {
      number: "03",
      title: "Administrative Support",
      description: "Handling emails, setting agendas, and ensuring smooth communication for productive meetings."
    },
    {
      number: "04",
      title: "Social Media Management",
      description: "Creating and scheduling posts, engaging with audiences, and boosting brand visibility"
    }
  ];

  const skills = [
    { name: 'Figma', percentage: '45%', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Canva', percentage: '85%', icon: canvaImage },
    { name: 'WordPress', percentage: '50%', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg' },
    { name: 'Slack', percentage: '55%', icon: slackImage },
    { name: 'Notion', percentage: '70%', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg' }
  ];

  return (
    <div id="about" className="min-h-screen pt-16 md:pt-24">
      {/* Header Section - White Background */}
      <div className="relative pt-16 pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative"> {/* Make container relative for image positioning */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-8">
            <div className="relative w-44 h-60 md:w-52 md:h-72 flex-shrink-0">
              <div className="absolute inset-0 bg-[#ff00ff]/10 rounded-full animate-pulse"></div>
              <img
                src={patsyImage}
                alt="Patsy"
                className="w-full h-full object-cover rounded-full border-4 border-[#e28dbc] shadow-lg relative"
              />
            </div>
            <div className="flex-1 text-left text-gray-800">
              <p className="text-sm uppercase tracking-wider mb-1 text-gray-600">About me</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-2">
                Hello
                <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 text-gray-700">
              I am Ronimee Patsy, an Information Technology student with a strong passion for design and organizational management. I specialize in creating visually engaging marketing materials—including posters, flyers, and logos—while also expanding my expertise in UI/UX design. Additionally, I offer efficient meeting coordination services, ensuring structured and productive collaborations.
              </p>
              <p className="text-lg sm:text-xl mb-6 text-gray-700">
              What distinguishes my work is my ability to merge technical proficiency with creative problem-solving. I approach every project with meticulous attention to detail, adaptability, and a commitment to clear communication. As a quick learner with a flexible work style, I prioritize delivering high-quality results while maintaining a professional and collaborative workflow.
              </p>
              <p className="text-lg sm:text-xl mb-6 text-gray-700">
              I am eager to contribute my skills to meaningful projects and further develop my experience in design and coordination. I welcome the opportunity to discuss how I can support your team or initiatives. Please feel free to reach out at your convenience
              </p>
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span>Oton, Iloilo City</span>
                </div>
                <div className="flex items-center gap-2">
                  <AvailabilityIcon />
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section - Reorganized into 2 Columns */} 
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-16"> 
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
          {/* Left Column (Contact Info) */} 
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 mb-8 md:mb-0">
          </div>

          {/* Right Column (Description) */} 
          <div className="w-full md:w-2/3 lg:w-3/4">
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1a1a1a]">
          My <span className="text-[#ff00ff]">Skills</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600">
      
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto pb-8 justify-center">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-lg hover:shadow-[#ff00ff]/40"
            >
              <img 
                src={skill.icon || "/placeholder.svg"} 
                alt={skill.name} 
                className="w-16 h-16 mb-4 object-contain mx-auto"
              />
              <span className="text-4xl font-bold mb-2 text-[#ff00ff]">
                {skill.percentage}
              </span>
              <span className="text-sm text-gray-600">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-[#1a1a1a]">
          My <span className="text-[#ff00ff]">Services</span>
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`rounded-lg ${index % 2 === 0 ? 'bg-[#db4892c4]' : 'bg-transparent'} transition-all duration-300`}
              >
                <div className="px-4 xs:px-5 sm:px-6 py-6 xs:py-7 sm:py-8">
                  <div className="flex flex-col xs:flex-col sm:flex-row items-start xs:items-start sm:items-center gap-4 xs:gap-4 sm:gap-6">
                    <div className="flex flex-row xs:flex-row sm:flex-row items-center gap-3 xs:gap-3 sm:gap-4 sm:w-1/3 justify-start xs:justify-start sm:justify-start">
                      <span className={`text-base xs:text-xl sm:text-3xl md:text-4xl font-extrabold ${index % 2 === 0 ? 'text-white' : 'text-[#ff00ff]'}`}>{service.number}</span>
                      <h3 className={`text-sm xs:text-lg sm:text-xl md:text-2xl font-extrabold ${index % 2 === 0 ? 'text-white' : 'text-[#ff00ff]'}`}>{service.title}</h3>
                    </div>
                    <p className={`sm:w-2/3 text-xs xs:text-sm sm:text-base md:text-lg break-words text-justify ${index % 2 === 0 ? 'text-white' : 'text-gray-700'}`}>
                      {service.description}
                    </p>
                  </div>
                  {service.title === "Graphics Design" && (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keep the wave animation style if needed */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(14deg); }
          40% { transform: rotate(-8deg); }
          60% { transform: rotate(14deg); }
          80% { transform: rotate(-4deg); }
          100% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const EducationPage = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      level: "College",
      school: "Western Institute of Technology",
      schoolUrl: "https://www.facebook.com/WesternInstituteOfTechnology.Iloilo/",
      year: "Present",
      achievements: [
        "1st Yr Representative of PSITS (2023-2024)",
        "Asst. Treasurer of PSITS (2024-2025)",
        "PSITS Representative of Credo (2024-2025)"
      ]
    },
    {
      level: "Senior Highschool",
      school: "Oton National Highschool",
      schoolUrl: "https://www.facebook.com/otonnhsofficial/",
      year: "2023",
      achievements: [
        "Graduated with Honors",
      ]
    },
    {
      level: "Junior Highschool",
      school: "Oton National Highschool",
      schoolUrl: "https://www.facebook.com/otonnhsofficial/",
      year: "2020",
      achievements: [
        "Graduated with Honors",
      
      ]
    },
    {
      level: "Elementary",
      school: "Oton Central Elementary School",
      schoolUrl: "https://www.facebook.com/otoncentrales",
      year: "2016",
      achievements: [
        "Public Communication Officer (SSG)",
        "Broadcasting in English (2014-2016)"
      ]
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % educationData.length);
  };

  const currentEducation = educationData[activeIndex];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-[#1a0f1a]' : 'bg-[#fefefe]'}`}>
      {/* Education Header */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-16  ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>
          My <span className="text-[#ff00ff]">Education</span>
        </h2>
      

        {/* Centered Education Card with Arrows */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevious}
            className={`border-2 border-[#ff00ff] rounded-full transition-all duration-300 p-1.5 hidden sm:block ${
              isDark ? 'bg-black text-[#ff00ff]' : 'bg-transparent text-[#1a0f1a]'
            } hover:text-white hover:bg-[#ff00ff]`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Education Card */}
          <div className="w-full max-w-[320px] sm:max-w-sm px-4 sm:px-0">
            <div className={`border-2 border-[#ff00ff] rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff00ff]/20 ${
              isDark ? 'bg-black' : 'bg-white'
            }`}>
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-[#ff00ff] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
              <h3 className={`text-base font-bold mb-2 text-center transition-colors ${
                isDark ? 'text-white' : 'text-[#1a0f1a]'
              } hover:text-[#ff00ff]`}>{currentEducation.level}</h3>
              <a 
                href={currentEducation.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#ff00ff] text-sm mb-1 text-center hover:scale-105 hover:underline transition-all group"
              >
                {currentEducation.school}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
              <p className={`mb-3 text-center text-xs ${
                isDark ? 'text-gray-300' : 'text-[#1a0f1a]'
              }`}>{currentEducation.year}</p>
              <div className="mt-2">
                <h5 className={`font-semibold mb-2 text-center text-sm transition-colors ${
                  isDark ? 'text-white' : 'text-[#1a0f1a]'
                } hover:text-[#ff00ff]`}>Achievements</h5>
                {currentEducation.achievements.map((achievement, index) => (
                  <p 
                    key={index} 
                    className={`text-center mb-1 text-xs transition-colors cursor-default ${
                      isDark ? 'text-gray-300' : 'text-[#1a0f1a]'
                    } hover:text-[#ff00ff]`}
                  >
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className={`border-2 border-[#ff00ff] rounded-full transition-all duration-300 p-1.5 hidden sm:block ${
              isDark ? 'bg-black text-[#ff00ff]' : 'bg-transparent text-[#1a0f1a]'
            } hover:text-white hover:bg-[#ff00ff]`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center gap-8 sm:hidden w-full">
            <button 
              onClick={handlePrevious}
              className={`border-2 border-[#ff00ff] rounded-full transition-all duration-300 p-1.5 ${
                isDark ? 'bg-black text-[#ff00ff]' : 'bg-transparent text-[#1a0f1a]'
              } hover:text-white hover:bg-[#ff00ff]`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className={`border-2 border-[#ff00ff] rounded-full transition-all duration-300 p-1.5 ${
                isDark ? 'bg-black text-[#ff00ff]' : 'bg-transparent text-[#1a0f1a]'
              } hover:text-white hover:bg-[#ff00ff]`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {educationData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 border border-[#ff00ff] ${
                index === activeIndex 
                  ? 'bg-[#ff00ff] scale-150' 
                  : `${isDark ? 'bg-black' : 'bg-transparent'} hover:bg-[#ff00ff] hover:scale-125`
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationPage
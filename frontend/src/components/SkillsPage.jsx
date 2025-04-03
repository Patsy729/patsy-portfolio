import React from 'react'
import { useTheme } from '../context/ThemeContext'

const SkillsPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-[#1a0f1a]' : 'bg-[#fefefe]'}  `}>
      {/* Skills Header */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-16 text-center ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          My <span className="text-[#ff00ff]">Skills</span>
        </h2>
      
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Front-end Development Card */}
        <div className={`group ${isDark ? 'bg-[#800080]' : 'bg-[#fefefe]'} rounded-2xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff00ff]/20 border-2 border-[#ff00ff]/20 hover:border-[#ff00ff]`}>
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white group-hover:rotate-180 transition-transform duration-300">
            <span className={`font-mono ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>&lt;/&gt;</span>
          </div>
          <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>
            Front-end Development
          </h3>
          <div className="flex flex-wrap gap-2">
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '100ms' }}
            >
              React
            </span>
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '200ms' }}
            >
              JavaScript
            </span>
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '300ms' }}
            >
              HTML
            </span>
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '400ms' }}
            >
              CSS
            </span>
          </div>
        </div>

        {/* UI/UX Design Card */}
        <div className={`group ${isDark ? 'bg-[#800080]' : 'bg-[#fefefe]'} rounded-2xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff00ff]/20 border-2 border-[#ff00ff]/20 hover:border-[#ff00ff]`}>
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white group-hover:rotate-180 transition-transform duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
            </svg>
          </div>
          <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>
            UI/UX Design
          </h3>
          <div className="flex flex-wrap gap-2">
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '100ms' }}
            >
              Figma
            </span>
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '200ms' }}
            >
              Prototyping
            </span>
            <span 
              className={`${isDark ? 'bg-black/25 text-white' : 'bg-[#ff00ff]/10 text-[#1a0f1a]'} px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:bg-[#ff00ff]/50 hover:scale-110 cursor-default animate-fade-in-up`}
              style={{ animationDelay: '300ms' }}
            >
              Wireframing
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default SkillsPage 
import { useTheme } from '../context/ThemeContext'

const ServicesPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-[#1a0f1a]' : 'bg-[#fefefe]'}`}>
      {/* Services Header */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-16 text-center ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          My <span className="text-[#ff00ff]">Services</span>
    </h2>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Front-end Development Card */}
        <div className={`p-5 sm:p-6 rounded-2xl ${isDark ? 'bg-[#1a0f1a]' : 'bg-white'} border border-[#ff00ff]/20 hover:border-[#ff00ff] transition-all duration-300`}>
          <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-xl flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#ff00ff]" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
            </svg>
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Front-end Development
          </h3>
          <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Building responsive and interactive websites using modern technologies like React, Tailwind CSS, and more.
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className={`p-5 sm:p-6 rounded-2xl ${isDark ? 'bg-[#1a0f1a]' : 'bg-white'} border border-[#ff00ff]/20 hover:border-[#ff00ff] transition-all duration-300`}>
          <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-xl flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#ff00ff]" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-[#1a0f1a]'}`}>
            UI/UX Design
          </h3>
          <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I design intuitive, beautiful interfaces focused on user needs. From research to prototypes, I create experiences that engage and convert.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage 
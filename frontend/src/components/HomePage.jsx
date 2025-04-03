import { useState, useEffect } from 'react'
import './HomePage.css'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ userName }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = ["UI/UX Designer", "Front-end Developer"]
  const period = 2000

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick()
    }, typingSpeed)

    return () => clearTimeout(ticker)
  }, [text, isDeleting, loopNum, typingSpeed])

  const tick = () => {
    let i = loopNum % texts.length
    let fullText = texts[i]
    let updatedText = isDeleting ? text.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setTypingSpeed(100)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }
  }

  const handleHireMe = () => {
    navigate('/contact');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#1a0f1a]' : 'bg-[#fefefe]'}`}>
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-8 sm:pb-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="w-full md:max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Hi, It's <span className="text-[#ff00ff]">Ronimee Patsy<br />Gascon</span>
            </h2>
            <h3 className={`text-xl sm:text-2xl mb-4 sm:mb-6 ${isDark ? 'text-gray-200' : 'text-[#1a0f1a]'} flex items-center gap-2 justify-center md:justify-start`}>
              I'm a
              <span className="typewriter-container relative inline-flex">
                <span className="text-[#ff00ff]">{text}</span>
                <span className="cursor"></span>
              </span>
            </h3>
            <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-[#1a0f1a]'} mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0`}>
              Designing and building modern, user-centric websites and applications—combining eye-catching aesthetics with intuitive interactions. As a UI/UX Designer and Front-End Developer, I bridge the gap between vision and reality, ensuring every pixel serves a purpose and every line of code enhances the experience.
            </p>
            
            <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Gmail Icon */}
              <a href="mailto:patsy.29school@gmail.com" 
                className={`${isDark ? 'text-white' : 'text-[#1a0f1a]'} hover:text-[#ff00ff] transition-colors bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 rounded-full p-1.5 sm:p-2`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/user01837392373" 
                className={`${isDark ? 'text-white' : 'text-[#1a0f1a]'} hover:text-[#ff00ff] transition-colors bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 rounded-full p-1.5 sm:p-2`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/_patccchiic/" 
                className={`${isDark ? 'text-white' : 'text-[#1a0f1a]'} hover:text-[#ff00ff] transition-colors bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 rounded-full p-1.5 sm:p-2`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                </svg>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/Patsy729" 
                className={`${isDark ? 'text-white' : 'text-[#1a0f1a]'} hover:text-[#ff00ff] transition-colors bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 rounded-full p-1.5 sm:p-2`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
              </a>
            </div>
  
            <button 
              onClick={handleHireMe}
              className="bg-[#ff00ff]/10 text-[#ff00ff] px-4 sm:px-6 py-2 rounded-full border-2 border-[#ff00ff] hover:bg-[#ff00ff] hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Hire me
            </button>
          </div>
  
          <div className="w-[280px] sm:w-[320px] md:w-[400px] aspect-square relative">
            <div className="absolute inset-0 bg-[#ff00ff]/10 rounded-full animate-pulse"></div>
            {/* Profile Image */}
            <img 
              src="/patsy.png" 
              alt="Ronimee Patsy Gascon" 
              className="w-full h-full object-cover rounded-full border-4 border-[#ff00ff] shadow-lg"
            />
            
            {/* Front-end Developer Label */}
            <div className="absolute -top-4 right-0 bg-[#ff00ff] text-white px-4 py-2 rounded-full text-sm">
              Front-end Developer
            </div>

            {/* UI/UX Designer Label */}
            <div className="absolute -bottom-2 left-8 bg-[#ff00ff] text-white px-4 py-2 rounded-full text-sm">
              UI/UX DESIGNER
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage 

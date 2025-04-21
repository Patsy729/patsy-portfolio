import { useState, useEffect } from 'react';
import patsyImage from '../../public/patsy.png';
import './HomePage.css';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = "/Ronime Patsy Gascon - CV.pdf";
  link.download = "Ronime_Patsy_Gascon_CV.pdf"; // Optional: Rename the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Freelancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting ? text.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="bg-[#fefefe] min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-8 sm:pb-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="w-full md:max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Hi, It's <span className="text-[#ff00ff]">Ronimee Patsy<br />Gascon</span>
            </h2>
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-[#1a0f1a] flex items-center gap-2 justify-center md:justify-start">
              I'm a
              <span className="typewriter-container relative inline-flex">
                <span className="text-[#ff00ff]">{text}</span>
                <span className="cursor"></span>
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#1a0f1a] mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              I design eye-catching visuals, streamline meetings, and help bring ideas to life. Just starting out, but 100% committed to quality and your success. Let's make something great!
            </p>
            
            <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <button 
                onClick={handleDownload}
                className="bg-[#ff00ff]/10 text-[#ff00ff] px-4 sm:px-6 py-2 rounded-full border-2 border-[#ff00ff] hover:bg-[#ff00ff] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="w-[280px] sm:w-[320px] md:w-[400px] aspect-square relative">
            <img
              src={patsyImage} 
              alt="Ronimee Patsy Gascon" 
              className="w-full h-full object-cover rounded-full border-4 border-[#ff00ff] shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
</create_file>

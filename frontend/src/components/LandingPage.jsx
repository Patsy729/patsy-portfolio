import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChoice = (choice) => {
    if (choice === 'yes') {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('_subject', 'New Portfolio Visitor!');
      formData.append('_template', 'paragraph');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/patsy.29school@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#1a0f1a] flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#ff00ff]">Patfolio.</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {step === 1 && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Wanna know <span className="text-[#ff00ff]">Patsy?</span>
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleChoice('yes')}
                  className="w-24 py-2 bg-[#E4E4E4] text-[#800080] rounded-full hover:bg-white transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleChoice('no')}
                  className="w-24 py-2 bg-[#E4E4E4] text-[#800080] rounded-full hover:bg-white transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNameSubmit} className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What is your <span className="text-[#ff00ff]">name?</span>
              </h2>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-transparent border-2 border-[#ff00ff] rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#ff40ff]"
                  autoFocus
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#ff00ff] rounded-full flex items-center justify-center text-white hover:bg-[#ff40ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Thanks for <span className="text-[#ff00ff]">stopping by!</span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 
import { useState } from 'react';

const IntroSteps = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const handleYesClick = () => {
    setStep(2);
  };

  const handleNoClick = () => {
    setStep(3);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a0f1a] flex flex-col">
      {/* Header */}
      <header className="p-6">
        <h1 className="text-[#ff00ff] text-2xl font-bold">Patfolio.</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-semibold mb-8">
                Wanna know Patsy?
              </h2>
              <div className="space-x-4">
                <button
                  onClick={handleYesClick}
                  className="px-8 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800 font-medium transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="px-8 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800 font-medium transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-semibold mb-8">
                What is your name?
              </h2>
              <form onSubmit={handleNameSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-80 px-4 py-3 rounded-full bg-transparent border-2 border-[#ff00ff] text-white placeholder-gray-400 focus:outline-none focus:border-[#ff40ff]"
                />
              </form>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-white text-5xl font-semibold">
                Thanks for stopping by!
              </h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IntroSteps; 
import React from 'react';

const ButterflyDesign = () => {
  const renderButterfly = (size, className) => (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-xl bg-[#ff00ff] opacity-20 rounded-full" />
      
      {/* Particles */}
      <div className="absolute -inset-4">
        <div className="absolute top-1/2 left-1/2 h-1 w-1 bg-[#ff00ff] rounded-full animate-particle1" />
        <div className="absolute top-1/2 left-1/2 h-1 w-1 bg-[#ff00ff] rounded-full animate-particle2" />
        <div className="absolute top-1/2 left-1/2 h-0.5 w-0.5 bg-[#ff00ff] rounded-full animate-particle3" />
      </div>

      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        className={`${className} drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]`}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          fill="currentColor"
          d="M20 4c-3 6-9 8-14 8 0 12 11 24 14 24 3 0 14-12 14-24-5 0-11-2-14-8z"
          filter="url(#glow)"
        />
        <path
          fill="currentColor"
          d="M20 8c-2 4-6 5.5-10 5.5 0 9 8 16.5 10 16.5s10-7.5 10-16.5c-4 0-8-1.5-10-5.5z"
          className="opacity-75"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );

  const renderStar = (size, className) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12 1l3.22 6.52 7.2.63-5.21 5.07 1.23 7.18L12 17.77l-6.44 2.63 1.23-7.18-5.21-5.07 7.2-.63L12 1z"
      />
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top right butterfly */}
      <div className="absolute top-1/4 right-10 transform -translate-y-1/2 animate-float">
        {renderButterfly(40, "text-[#ff00ff] opacity-60")}
      </div>

      {/* Bottom left butterfly */}
      <div className="absolute bottom-1/4 left-10 transform -translate-y-1/2 animate-floatReverse">
        {renderButterfly(30, "text-[#ff00ff] opacity-50")}
      </div>

      {/* Additional butterflies */}
      <div className="absolute top-1/3 left-1/4 transform -translate-y-1/2 animate-floatSlow">
        {renderButterfly(25, "text-[#ff00ff] opacity-40")}
      </div>

      <div className="absolute bottom-1/3 right-1/4 transform -translate-y-1/2 animate-floatReverseSlow">
        {renderButterfly(35, "text-[#ff00ff] opacity-55")}
      </div>

      {/* Stars */}
      <div className="absolute top-1/6 left-1/3 animate-twinkle">
        {renderStar(15, "text-[#ff00ff] opacity-20")}
      </div>

      <div className="absolute top-2/3 right-1/3 animate-twinkleSlow">
        {renderStar(20, "text-[#ff00ff] opacity-25")}
      </div>

      <div className="absolute bottom-1/6 left-2/3 animate-twinkle">
        {renderStar(12, "text-[#ff00ff] opacity-15")}
      </div>

      <div className="absolute top-1/2 right-1/6 animate-twinkleSlow">
        {renderStar(18, "text-[#ff00ff] opacity-20")}
      </div>
    </div>
  );
};

export default ButterflyDesign; 
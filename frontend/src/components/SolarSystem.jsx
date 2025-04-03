import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SolarSystem = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Central star (sun) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 bg-[#ff00ff] rounded-full blur-xl animate-pulse opacity-20" />
      </div>

      {/* Orbits with planets */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#ff00ff] rounded-full opacity-10`}
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            animation: `spin-${['slow', 'slower', 'slowest'][i % 3]} ${20 + i * 10}s linear infinite`
          }}
        >
          <div 
            className="absolute w-3 h-3 bg-[#ff00ff] rounded-full blur-md"
            style={{
              top: '0',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.4
            }}
          />
        </div>
      ))}

      {/* Background stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-[#ff00ff] rounded-full animate-twinkle"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 2}s`
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`
          }}
        >
          <div className="w-[3px] h-[3px] bg-[#ff00ff] rounded-full blur-sm opacity-60" />
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#ff00ff] to-transparent -ml-10" />
        </div>
      ))}

      {/* Additional glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl animate-pulse"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            background: '#ff00ff',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default SolarSystem; 
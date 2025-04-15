import React, { useState } from 'react'

const EducationPage = () => {
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
    <div id="education" className="bg-[#fefefe] min-h-screen pt-16 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a0f1a]">
            My <span className="text-[#ff00ff]">Education</span> Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            An overview of my academic background and key accomplishments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-[#ff00ff]/30">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <span className="inline-block bg-[#ff00ff]/10 text-[#ff00ff] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {currentEducation.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a0f1a]">{currentEducation.school}</h3>
                <p className="text-sm text-gray-500">{currentEducation.year}</p>
              </div>
              <a
                href={currentEducation.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff00ff] hover:underline text-sm mt-2 sm:mt-0"
              >
                Visit School
              </a>
            </div>

            <p className="text-base text-gray-700 mb-4">Achievements:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {currentEducation.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex justify-between">
            <button
              onClick={handlePrevious}
              className="flex items-center text-sm font-medium text-[#ff00ff] hover:text-[#d900d9] disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={educationData.length <= 1}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Previous
            </button>
            <button
              onClick={handleNext}
              className="flex items-center text-sm font-medium text-[#ff00ff] hover:text-[#d900d9] disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={educationData.length <= 1}
            >
              Next
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPage

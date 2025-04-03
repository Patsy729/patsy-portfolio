import React from 'react';

const SectionHeading = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-heading">
        {title} {highlight && <span className="section-heading-highlight">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
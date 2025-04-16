import React from 'react';

const TestComponent = () => {
  return (
    <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1>Test Component Rendered</h1>
      <p>This is a minimal test component to isolate rendering issues.</p>
    </div>
  );
};

export default TestComponent;

const ScrollWrapper = ({ children }) => {
  return (
    <div className="min-h-screen overflow-auto">
      {children}
    </div>
  );
};

export default ScrollWrapper;

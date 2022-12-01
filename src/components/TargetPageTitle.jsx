const TargetPageTitle = ({ title, getNewTarget, className }) => {
  return (
    <div className={className}>
      <h2>Target Page: {title}</h2>
      <h2 className="refresh-icon" onClick={getNewTarget}>
        ⟳
      </h2>
    </div>
  );
};

export default TargetPageTitle;

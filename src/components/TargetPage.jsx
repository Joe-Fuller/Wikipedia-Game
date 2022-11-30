import "../styles/target-page.css";

const TargetPage = ({ className, targetPage }) => {
  return (
    <div className={className}>
      <h2>Target Page: {targetPage}</h2>
    </div>
  );
};

export default TargetPage;

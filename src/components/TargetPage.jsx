import "../styles/target-page.css";

const TargetPage = ({ className, targetPageSummary }) => {
  return (
    <div className={className}>
      <ul>
        {targetPageSummary.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default TargetPage;

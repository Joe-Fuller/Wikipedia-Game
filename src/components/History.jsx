const History = ({ className, history, clickHistoryLink }) => {
  return (
    <div className={className}>
      <ul>
        {history.map((item, i) => {
          return (
            <li key={i} id={i} onClick={clickHistoryLink}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

const History = ({ className, history, clickHistoryLink }) => {
  return (
    <div className={className}>
      <ul>
        {history.map((item) => {
          return (
            <li key={item} onClick={clickHistoryLink}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

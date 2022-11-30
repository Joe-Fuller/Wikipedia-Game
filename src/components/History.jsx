const History = ({ className, history }) => {
  const handleClick = () => {};

  return (
    <div className={className}>
      <h2>History</h2>
      <ul>
        {history.map((item) => {
          return (
            <li key={item} onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

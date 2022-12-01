import "../styles/win-screen.css";

const WinScreen = ({ reset, history }) => {
  return (
    <section className="win-screen">
      <div>Congratulations!</div>
      <p>
        {history.map((page, i) => {
          if (i < history.length - 1) {
            return page + " -> ";
          } else {
            return page;
          }
        })}
      </p>
      <button className="win-screen-button" onClick={reset}>
        Go Again
      </button>
    </section>
  );
};

export default WinScreen;

import "../styles/win-screen.css";

const WinScreen = ({ reset }) => {
  return (
    <section>
      <div className="win-screen">Congratulations!</div>
      <button className="win-screen-button" onClick={reset}>
        Go Again
      </button>
    </section>
  );
};

export default WinScreen;

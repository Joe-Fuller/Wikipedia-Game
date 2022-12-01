import { useEffect, useState } from "react";
import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Header from "./components/Header";
import TargetPage from "./components/TargetPage";
import History from "./components/History";
import getTargetPage from "./utils/getTargetPage";

function App() {
  const [targetPage, setTargetPage] = useState("No Target Page");
  const [history, setHistory] = useState([]);
  const [passedHistoryPage, setPassedHistoryPage] = useState(null);

  useEffect(() => {
    getTargetPage().then((target) => {
      setTargetPage(target);
    });
  }, []);

  const getNewTarget = () => {
    getTargetPage().then((target) => {
      setTargetPage(target);
    });
  };

  const addToHistory = (page) => {
    setHistory([...history, page]);
  };

  const clickHistoryLink = (e) => {
    setPassedHistoryPage(e.target.innerText);
  };

  return (
    <div className="container">
      <Header className="box1" />
      <TargetPage className="box3" targetPage={targetPage} />
      <CurrentPage
        className="box2"
        targetPage={targetPage}
        getNewTarget={getNewTarget}
        addToHistory={addToHistory}
        passedHistoryPage={passedHistoryPage}
      />
      <History
        className="box4"
        history={history}
        clickHistoryLink={clickHistoryLink}
      />
    </div>
  );
}

export default App;

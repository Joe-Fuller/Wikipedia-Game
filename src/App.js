import { useEffect, useState } from "react";
import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Header from "./components/Header";
import TargetPage from "./components/TargetPage";
import History from "./components/History";
import getTargetPage from "./utils/getTargetPage";
import CurrentPageTitle from "./components/CurrentPageTitle";
import TargetPageTitle from "./components/TargetPageTitle";
import HistoryTitle from "./components/HistoryTitle";

function App() {
  const [targetPage, setTargetPage] = useState("No Target Page");
  const [history, setHistory] = useState([]);
  const [passedHistoryPage, setPassedHistoryPage] = useState(null);
  const [currentPageTitle, setCurrentPageTitle] = useState("No Current Page");

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

  const alterCurrentPageTitle = (newTitle) => {
    setCurrentPageTitle(newTitle);
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
        alterCurrentPageTitle={alterCurrentPageTitle}
      />
      <History
        className="box4"
        history={history}
        clickHistoryLink={clickHistoryLink}
      />
      <CurrentPageTitle className="box5" currentPageTitle={currentPageTitle} />
      <TargetPageTitle className="box6" title={targetPage} />
      <HistoryTitle className="box7" />
    </div>
  );
}

export default App;

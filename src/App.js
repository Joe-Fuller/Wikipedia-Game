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
import PagesVisited from "./components/PagesVisited";
import Timer from "./components/Timer";
import InfoBox from "./components/InfoBox";
import Sections from "./components/Sections";

function App() {
  const [targetPage, setTargetPage] = useState("No Target Page");
  const [history, setHistory] = useState([]);
  const [passedHistoryPage, setPassedHistoryPage] = useState(null);
  const [currentPageTitle, setCurrentPageTitle] = useState("No Current Page");
  const [startTime, setStartTime] = useState(Date.now());
  const [sections, setSections] = useState([]);

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

  const resetHistory = (startPage) => {
    setHistory([startPage]);
  };

  const clickHistoryLink = (e) => {
    setPassedHistoryPage(e.target.innerText);
    setHistory(history.slice(0, parseInt(e.target.id)));
  };

  const alterCurrentPageTitle = (newTitle) => {
    setCurrentPageTitle(newTitle);
  };

  const resetStartTime = () => {
    setStartTime(Date.now());
  };

  const alterSections = (newSections) => {
    setSections(newSections);
  };

  return (
    <div className="container">
      <InfoBox />
      <Header className="box1" />
      <TargetPage
        className="box3"
        targetPage={targetPage}
        getNewTarget={getNewTarget}
      />
      <CurrentPage
        className="box2"
        targetPage={targetPage}
        getNewTarget={getNewTarget}
        history={history}
        addToHistory={addToHistory}
        resetHistory={resetHistory}
        passedHistoryPage={passedHistoryPage}
        alterCurrentPageTitle={alterCurrentPageTitle}
        resetStartTime={resetStartTime}
        alterSections={alterSections}
      />
      <History
        className="box4"
        history={history}
        clickHistoryLink={clickHistoryLink}
      />
      <CurrentPageTitle className="box5" currentPageTitle={currentPageTitle} />
      <TargetPageTitle
        className="box6"
        title={targetPage}
        getNewTarget={getNewTarget}
      />
      <HistoryTitle className="box7" />
      <PagesVisited className="box8" pagesVisited={history.length} />
      <Timer className="box9" startTime={startTime} />
      <Sections className="box10" sections={sections} />
    </div>
  );
}

export default App;

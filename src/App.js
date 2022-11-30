import { useEffect, useState } from "react";
import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Header from "./components/Header";
import TargetPage from "./components/TargetPage";
import getTargetPage from "./utils/getTargetPage";

function App() {
  const [targetPage, setTargetPage] = useState("No Target Page");
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

  return (
    <div className="container">
      <Header className="box1" />
      <TargetPage className="box3" targetPage={targetPage} />
      <CurrentPage
        className="box2"
        targetPage={targetPage}
        getNewTarget={getNewTarget}
      />
    </div>
  );
}

export default App;

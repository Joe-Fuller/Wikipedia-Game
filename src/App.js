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

  return (
    <div className="App">
      <Header />
      <TargetPage targetPage={targetPage} />
      <CurrentPage />
    </div>
  );
}

export default App;

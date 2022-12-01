import { useEffect, useState } from "react";
import alterHtml from "../utils/alterHtml";
import getTargetPage from "../utils/getTargetPage";
import getMobilePage from "../utils/getMobilePage";
import "../styles/current-page.css";
import WinScreen from "./WinScreen";

const CurrentPage = ({
  className,
  targetPage,
  getNewTarget,
  addToHistory,
  passedHistoryPage,
  alterCurrentPageTitle,
}) => {
  const [title, setTitle] = useState(null);
  const [htmlString, setHtmlString] = useState("No HTML String");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTargetPage().then((body) => {
      getMobilePage(body).then((body) => {
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        setIsLoading(false);
      });
    });
  }, []);

  useEffect(() => {
    if (passedHistoryPage) {
      setIsLoading(true);
      getMobilePage(passedHistoryPage).then((body) => {
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        setIsLoading(false);
      });
    }
  }, [passedHistoryPage]);

  const handleClick = (e) => {
    const element = e.target.closest("B");
    if (element && e.currentTarget.contains(element)) {
      setIsLoading(true);
      addToHistory(title);
      getMobilePage(element.innerText).then((body) => {
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        setIsLoading(false);
      });
    }
  };

  const reset = () => {
    getNewTarget();
  };

  return (
    <section className={className}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: alterHtml(htmlString) }}
        />
      )}
      {targetPage === title ? <WinScreen reset={reset} /> : <></>}
    </section>
  );
};

export default CurrentPage;

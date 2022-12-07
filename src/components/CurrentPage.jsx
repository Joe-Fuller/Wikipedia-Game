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
  history,
  addToHistory,
  passedHistoryPage,
  alterCurrentPageTitle,
  resetStartTime,
  resetHistory,
  alterSections,
  executeScroll,
  ref,
}) => {
  const [title, setTitle] = useState(null);
  const [htmlString, setHtmlString] = useState("No HTML String");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTargetPage().then((body) => {
      getMobilePage("The Bachelorette (American season 19)").then((body) => {
        addToHistory(body[0]);
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        alterSections(body[2]);
        setIsLoading(false);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (passedHistoryPage) {
      setIsLoading(true);
      getMobilePage(passedHistoryPage).then((body) => {
        addToHistory(body[0]);
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        alterSections(body[2]);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passedHistoryPage]);

  const handleClick = (e) => {
    const element = e.target.closest("B");
    if (element && e.currentTarget.contains(element)) {
      setIsLoading(true);
      getMobilePage(element.attributes.tag.nodeValue).then((body) => {
        addToHistory(body[0]);
        setTitle(body[0]);
        alterCurrentPageTitle(body[0]);
        setHtmlString(body[1]);
        alterSections(body[2]);
        setIsLoading(false);
      });
    }
  };

  const reset = () => {
    getNewTarget();
    resetStartTime();
    resetHistory(title);
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
      {targetPage === title ? (
        <WinScreen reset={reset} history={history} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default CurrentPage;

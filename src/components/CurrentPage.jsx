import { useEffect, useState } from "react";
import alterHtml from "../utils/alterHtml";
import getTargetPage from "../utils/getTargetPage";
import getMobilePage from "../utils/getMobilePage";

const CurrentPage = () => {
  const [title, setTitle] = useState(null);
  const [htmlString, setHtmlString] = useState("No HTML String");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTargetPage().then((body) => {
      getMobilePage(body).then((body) => {
        setTitle(body[0]);
        setHtmlString(body[1]);
        setIsLoading(false);
      });
    });
  }, []);

  const handleClick = (e) => {
    const element = e.target.closest("B");
    if (element && e.currentTarget.contains(element)) {
      setIsLoading(true);
      getMobilePage(element.innerText).then((body) => {
        setTitle(body[0]);
        setHtmlString(body[1]);
        setIsLoading(false);
      });
    }
  };

  return (
    <section>
      <h2>Current Page: {title}</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: alterHtml(htmlString) }}
        />
      )}
    </section>
  );
};

export default CurrentPage;

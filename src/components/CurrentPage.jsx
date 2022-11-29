import { useEffect, useState } from "react";
import getPage from "../utils/getPage";
import alterHtml from "../utils/alterHtml";
import getTargetPage from "../utils/getTargetPage";

const CurrentPage = () => {
  const [title, setTitle] = useState(null);
  const [htmlString, setHtmlString] = useState("No HTML String");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTargetPage().then((body) => {
      setTitle(body);
      getPage(body).then((body) => {
        setHtmlString(alterHtml(body));
        setIsLoading(false);
      });
    });
  }, []);

  const handleClick = (e) => {
    const element = e.target.closest("B");
    if (element && e.currentTarget.contains(element)) {
      setIsLoading(true);
      setTitle(element.innerText);
      getPage(element.innerText).then((body) => {
        // console.log(body);
        // console.log(alterHtml(body));
        setHtmlString(alterHtml(body));
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
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      )}
    </section>
  );
};

export default CurrentPage;

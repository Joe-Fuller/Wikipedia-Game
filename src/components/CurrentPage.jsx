import { useEffect, useState } from "react";
import alterLinks from "../utils/alterLinks";
import getRandomPage from "../utils/getRandomPage";
import getPage from "../utils/getPage";

const CurrentPage = () => {
  const [title, setTitle] = useState(null);
  const [htmlString, setHtmlString] = useState("No HTML String");

  useEffect(() => {
    if (title) {
      console.log(title);
      getPage(title).then((body) => {
        setHtmlString(body.lead.sections[0].text);
        for (let section of body.remaining.sections) {
          setHtmlString((h) => h + section.text);
        }
      });
    } else {
      getRandomPage().then((body) => {
        setTitle(body.lead.normalizedtitle);
        setHtmlString(body.lead.sections[0].text);
        for (let section of body.remaining.sections) {
          setHtmlString((h) => h + section.text);
        }
      });
    }
  }, [title]);

  const handleClick = (e) => {
    const element = e.target.closest("B");
    if (element && e.currentTarget.contains(element)) {
      setTitle(element.innerText);
    }
  };

  return (
    <section>
      <h2>Current Page: {title}</h2>
      <div
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: alterLinks(htmlString) }}
      />
    </section>
  );
};

export default CurrentPage;

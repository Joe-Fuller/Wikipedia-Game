import { useEffect, useState } from "react";
import getRandomPage from "../utils/getRandomPage";

const CurrentPage = () => {
  const [title, setTitle] = useState("No Title");
  const [htmlString, setHtmlString] = useState("No HTML String");

  useEffect(() => {
    getRandomPage().then((body) => {
      setTitle(body.lead.normalizedtitle);
      setHtmlString(body.lead.sections[0].text);
      for (let section of body.remaining.sections) {
        setHtmlString((h) => h + section.text);
      }
    });
  }, []);

  return (
    <section>
      <h2>Current Page: {title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </section>
  );
};

export default CurrentPage;

import { useEffect, useState } from "react";

const RandomWikiPage = () => {
  let headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [htmlString, setHtmlString] = useState("");

  useEffect(() => {
    fetch("https://en.wikipedia.org/api/rest_v1/page/random/mobile-sections", {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setHtmlString(body.lead.sections[0].text);
        for (let section of body.remaining.sections) {
          setHtmlString((h) => h + section.text);
        }
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default RandomWikiPage;

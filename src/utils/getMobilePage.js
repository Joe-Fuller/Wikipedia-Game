const getMobilePage = (title) => {
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  const unwantedCategories = [
    "References",
    "External links",
    "External link",
    "Sources",
    "Footnotes",
    "Notes",
    "Bibliography",
  ];

  return fetch(
    `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      const sections = ["Summary"];
      let htmlText = body.lead.sections[0].text;
      for (const section of body.remaining.sections) {
        if (!unwantedCategories.includes(section.line)) {
          htmlText += `<h2><span id=${section.line.replaceAll(
            " ",
            "_"
          )} class="mw-headline">${section.line}</span></h2>`;
          htmlText += section.text;
          sections.push(section.line);
        }
      }
      return [body.lead.normalizedtitle, htmlText, sections];
    });
};

export default getMobilePage;

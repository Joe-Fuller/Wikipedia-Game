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
      let htmlText =
        "<h2><span id=Summary class='mw-headline'>Summary</span></h2>" +
        body.lead.sections[0].text;
      for (const section of body.remaining.sections) {
        if (!unwantedCategories.includes(section.line)) {
          const re = /(?<=title=")([^"])+(?=")/g;
          const sectionHeading = section.line.match(re);
          if (sectionHeading) {
            htmlText += `<h2><span id=${sectionHeading[0].replaceAll(
              " ",
              "_"
            )} class="mw-headline">${sectionHeading[0]}</span></h2>`;
            sections.push(sectionHeading[0]);
          } else {
            htmlText += `<h2><span id=${section.line
              .replaceAll(" ", "_")
              .replaceAll('"', "")} class="mw-headline">${
              section.line
            }</span></h2>`;
            sections.push(section.line.replaceAll('"', ""));
          }
          htmlText += section.text;
        }
      }
      return [body.lead.normalizedtitle, htmlText, sections];
    });
};

export default getMobilePage;

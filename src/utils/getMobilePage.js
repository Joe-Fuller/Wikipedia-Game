const getMobilePage = (title) => {
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  const unwantedCategories = [
    "References",
    "External Links",
    "Sources",
    "Footnotes",
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
      let htmlText = body.lead.sections[0].text;
      for (const section of body.remaining.sections) {
        console.log(section.line);
        if (!unwantedCategories.includes(section.line)) {
          htmlText += `<h2><span class="mw-headline">${section.line}</span></h2>`;
          htmlText += section.text;
        }
      }
      return [body.lead.normalizedtitle, htmlText];
    });
};

export default getMobilePage;

const getMobilePage = (title) => {
  let headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

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
        htmlText += section.text;
      }
      return htmlText;
    });
};

export default getMobilePage;

const getPageSummary = (title) => {
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`, {
    method: "GET",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      const extract = body.extract.split(".").map((e) => {
        return e.trim();
      });
      extract.pop();
      return extract;
    });
};

export default getPageSummary;

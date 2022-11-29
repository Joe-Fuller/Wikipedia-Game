const getPage = (title) => {
  let headers = new Headers({
    Accept: "text/html",
    "Content-Type": "text/html",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  return fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${title}`, {
    method: "GET",
    headers: headers,
  }).then((res) => {
    return res.text();
  });
};

export default getPage;

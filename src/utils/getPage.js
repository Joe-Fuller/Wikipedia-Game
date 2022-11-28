const getPage = (title) => {
  let headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "API-User-Agent": "joefuller042@gmail.com",
  });

  return fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${title}`, {
    method: "GET",
    headers: headers,
  }).then((res) => {
    return res.json();
  });
};

export default getPage;

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
      // getSentences(body.extract);
      // const extract = body.extract.split(".").map((e) => {
      //   return e.trim();
      // });
      // extract.pop();

      return getSentences(body.extract);

      //return extract;
    });
};

const getSentences = (paragraph) => {
  console.log(paragraph);
  const sentences = [];
  let currSentence = "";

  for (let i = 0; i < paragraph.length - 1; i++) {
    const char = paragraph[i];
    if (char === ".") {
      if (paragraph[i + 1] !== " ") {
        // if the next character is not a space then a new sentence has not started
        currSentence += char;
      } else if (paragraph[i - 2] === ".") {
        // checks for e.g. F.C. or U.S.
        currSentence += char;
      } else if (
        ["Dr.", "Ms.", "St."].includes(paragraph.slice(i - 2, i + 1))
      ) {
        // checks for Dr. , Ms. , St.
        currSentence += char;
      } else if ("CEL".includes(paragraph[i - 1])) {
        // checks for E. coli (maybe too broad)
        // L is for Stephen L. Carter (this is too much)
        currSentence += char;
      } else if (["Inc."].includes(paragraph.slice(i - 3, i + 1))) {
        // checks for Inc.
        // (not sure about this one, Inc. could be at the end)
        currSentence += char;
      } else {
        sentences.push(currSentence);
        currSentence = "";
      }
    } else {
      currSentence += char;
    }
  }
  sentences.push(currSentence);

  console.log(sentences);
  return sentences;
};

export default getPageSummary;

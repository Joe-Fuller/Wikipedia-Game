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
      return getSentences(body.extract);
    });
};

const getSentences = (paragraph) => {
  const sentences = [];
  let currSentence = "";

  for (let i = 0; i < paragraph.length - 1; i++) {
    const char = paragraph[i];
    if (char === ".") {
      if (paragraph[i + 1] !== " ") {
        // if the next character is not a space then a new sentence has not started
        currSentence += char;
      } else if (paragraph[i + 2].toLowerCase() === paragraph[i + 2]) {
        // if the next character (after a space) is not capitalised then a new sentence has not started
        currSentence += char;
      } else if (". ".includes(paragraph[i - 2])) {
        // checks for e.g. F.C. or U.S.
        // and also for single letter words (often a person's middle initial)
        currSentence += char;
      } else if (
        ["Dr.", "Ms.", "St."].includes(paragraph.slice(i - 2, i + 1))
      ) {
        // checks for Dr. , Ms. , St.
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
  return sentences;
};

export default getPageSummary;

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
      } else if (paragraph.slice(i - 2, i + 1) === "St.") {
        // this checks for e.g. St. Augustine's Church
        currSentence += char;
      } else if (paragraph.slice(i - 3, i + 1) === "F.C.") {
        // checks for F.C. in football clubs
        currSentence += char;
      } else if (paragraph.slice(i - 2, i + 1) === "Dr.") {
        // checks for Dr. in doctors
        currSentence += char;
      } else if (paragraph[i - 1] === "E" || paragraph[i - 1] === "L") {
        // checks for E. coli (maybe too broad)
        // L is for Stephen L. Carter (this is too much)
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

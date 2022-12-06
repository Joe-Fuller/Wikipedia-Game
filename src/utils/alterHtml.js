const alterHtml = (htmlText) => {
  let alteredText = htmlText;
  alteredText = removePronunciationGuides(alteredText);
  alteredText = removePronunciationRespellingGuides(alteredText);
  alteredText = removeFrenchPronunctiationGuide(alteredText);
  alteredText = removeCoordLinks(alteredText);
  alteredText = removeCoordLinks2(alteredText);
  alteredText = removeExternalLinks(alteredText);
  alteredText = removeCitations(alteredText);
  alteredText = alterLinks(alteredText);
  // alteredText = removeSectionLinks(alteredText);
  alteredText = removeExpandableTables(alteredText);
  alteredText = removeBadCitationBlock(alteredText);
  alteredText = removeBadResearchBlock(alteredText);
  return alteredText;
};

const alterLinks = (htmlText) => {
  //   const re = /<a.*?title="(.*?)".*?<\/a>/g;
  // const re =
  //   /<a.{0,60}?href="\/[^#]{0,60}?title="(.{0,60}?)".{0,60}?>.{0,60}?<\/a>/g;
  // const re =
  //   /<a.{0,60}?href="\/wiki\/.{0,100}?" title="(.{0,80}?)".{0,60}?>[\s\S]{0,100}?<\/a>/g;

  const re = /<a\s+[^>]*href=["']\/wiki\/([^"']*)["'][^>]*>(.*?)<\/a>/gi;

  const alteredText = htmlText.replaceAll(
    re,
    "<b class='internal-link' tag='$1'>$2</b>"
  );
  return alteredText;
};

const removeCitations = (htmlText) => {
  // const re = /<span class="mw-ref reference".*?><\/span>/g;

  const re = /\[\d+\]/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeExpandableTables = (htmlText) => {
  const re = /<table class="box-Expand_language[\s\S]*?<\/table>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

// const removeSectionLinks = (htmlText) => {
//   const re =
//     /<a.{0,60}?href="\/.{0,100}?title=".{0,100}?".{0,60}?>(.{0,100}?)<\/a>/g;

//   const alteredText = htmlText.replaceAll(re, "$1");
//   return alteredText;
// };

const removeBadCitationBlock = (htmlText) => {
  const re = /<tr>.*?Question_book.*?<\/tr>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeBadResearchBlock = (htmlText) => {
  const re = /<table.*?possibly contains.*?<\/table>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removePronunciationGuides = (htmlText) => {
  const re = /\(<span.*?<a href="\/wiki\/Help:IPA.*?<\/a><\/span><\/span>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removePronunciationRespellingGuides = (htmlText) => {
  const re = /<a href="\/wiki\/Help:Pronunciation.*?<\/a>\)/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeFrenchPronunctiationGuide = (htmlText) => {
  const re = /<small .*?<\/small>.*?<a href="\/wiki\/Help:IPA.*?<\/a><\/span>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeCoordLinks = (htmlText) => {
  const re =
    /<span.*?geohack.toolforge.org.*?"latitude">(.*?)<\/span>.*?"longitude">(.*?)<\/span>.*?<\/a><\/span>/g;

  const alteredText = htmlText.replaceAll(re, "$1, $2");
  return alteredText;
};

const removeCoordLinks2 = (htmlText) => {
  const re =
    /<span.*?geohack.toolforge.org.*?"geo-dec">(.*?)<\/span>.*?<\/a><\/span>/g;

  const alteredText = htmlText.replaceAll(re, "$1");
  return alteredText;
};

const removeExternalLinks = (htmlText) => {
  const re = /<a rel="mw:ExtLink.*?>(.*?)<\/a>/g;

  const alteredText = htmlText.replaceAll(re, "$1");
  return alteredText;
};

export default alterHtml;

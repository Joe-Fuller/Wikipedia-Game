const alterHtml = (htmlText) => {
  let alteredText = htmlText;
  alteredText = alterLinks(alteredText);
  //alteredText = removeSups(alteredText);
  alteredText = removeExpandableTables(alteredText);
  return alteredText;
};

const alterLinks = (htmlText) => {
  //   const re = /<a.*?title="(.*?)".*?<\/a>/g;
  const re = /<a href="\/.*?title="(.{0,30}?)".{0,30}?<\/a>/g;

  const alteredText = htmlText.replaceAll(re, "<b>$1</b>");
  return alteredText;
};

const removeSups = (htmlText) => {
  const re = /<sup.*?>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeExpandableTables = (htmlText) => {
  const re = /<table class="box-Expand_language[\s\S]*?<\/table>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

export default alterHtml;

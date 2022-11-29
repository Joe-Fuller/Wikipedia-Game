const alterHtml = (htmlText) => {
  let alteredText = htmlText;
  alteredText = alterLinks(alteredText);
  alteredText = removeSups(alteredText);
  return alteredText;
};

const alterLinks = (htmlText) => {
  const re = /<a.*?title="(.*?)".*?<\/a>/g;

  const alteredText = htmlText.replaceAll(re, "<b>$1</b>");
  return alteredText;
};

const removeSups = (htmlText) => {
  const re = /<sup.*?>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

export default alterHtml;

const alterLinks = (htmlText) => {
  const re = /<a.*?title="(.*?)".*?<\/a>/g;

  const alteredText = htmlText.replaceAll(re, "<b>$1</b>");
  return alteredText;
};

export default alterLinks;

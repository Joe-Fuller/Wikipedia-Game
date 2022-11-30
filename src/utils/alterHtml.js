const alterHtml = (htmlText) => {
  let alteredText = htmlText;
  alteredText = alterLinks(alteredText);
  alteredText = removeSectionLinks(alteredText);
  alteredText = removeCitations(alteredText);
  alteredText = removeExpandableTables(alteredText);
  return alteredText;
};

const alterLinks = (htmlText) => {
  //   const re = /<a.*?title="(.*?)".*?<\/a>/g;
  // const re =
  //   /<a.{0,60}?href="\/[^#]{0,60}?title="(.{0,60}?)".{0,60}?>.{0,60}?<\/a>/g;

  const re =
    /<a.{0,60}?href="\/wiki\/.{0,100}?" title="(.{0,80}?)".{0,60}?>.{0,100}?<\/a>/g;

  const alteredText = htmlText.replaceAll(
    re,
    "<b class='internal-link'>$1</b>"
  );
  return alteredText;
};

const removeCitations = (htmlText) => {
  const re = /<span class="mw-ref reference".*?><\/span>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeExpandableTables = (htmlText) => {
  const re = /<table class="box-Expand_language[\s\S]*?<\/table>/g;

  const alteredText = htmlText.replaceAll(re, "");
  return alteredText;
};

const removeSectionLinks = (htmlText) => {
  const re =
    /<a.{0,60}?href="\/.{0,60}?title=".{0,60}?".{0,60}?>(.{0,60}?)<\/a>/g;

  const alteredText = htmlText.replaceAll(re, "$1");
  return alteredText;
};

export default alterHtml;

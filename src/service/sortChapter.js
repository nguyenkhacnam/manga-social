const getLastNumberFromChapterURL = (url) => {
  return parseInt(
    url.slice(url.indexOf("chapter-") + 8, url.indexOf("chapter-") + 11),
    10
  );
};

export const sortedChapters = (chapters) => {
  return chapters?.sort((a, b) => {
    const chapterNumberA = getLastNumberFromChapterURL(a);
    const chapterNumberB = getLastNumberFromChapterURL(b);

    return chapterNumberA - chapterNumberB;
  });
};

export const generateChapterNumber = (chapterURL) => {
  const lastIndex = chapterURL.lastIndexOf("/");
  return chapterURL.substring(lastIndex + 1);
};

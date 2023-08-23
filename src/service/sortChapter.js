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
  const lastDashIndex = chapterURL?.lastIndexOf("chapter-");
  const chapterNumber = chapterURL?.substring(lastDashIndex + 8); // +8 để bỏ qua "chapter-"
  return `chapter-${chapterNumber}`;
};

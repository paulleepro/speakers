export const sanitize = (str: string) => {
  return str.replace(/<p>\s<\/p>/g, "");
};

export const cutAfterSentenceAt = (count: number, str: string) => {
  let i = 0;
  for (; i < str.length; i++) {
    if (str[i] === "." && i >= count) {
      break;
    }
  }
  return str.slice(0, i + 1);
};

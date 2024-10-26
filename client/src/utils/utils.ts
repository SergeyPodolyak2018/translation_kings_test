export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1);
};
export const formatText = (word: string): string => {
  const temparr = word.split('_');
  return temparr.map((el) => capitalize(el)).join(' ');
};

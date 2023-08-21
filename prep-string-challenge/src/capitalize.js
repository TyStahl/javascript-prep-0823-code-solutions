/* exported capitalize */
function capitalize(string) {
  const firstLetter = string[0];
  let restOfWord = string.slice(1);
  restOfWord = restOfWord.toLowerCase();
  const capitalWord = firstLetter.toUpperCase() + restOfWord;
  return capitalWord;
}

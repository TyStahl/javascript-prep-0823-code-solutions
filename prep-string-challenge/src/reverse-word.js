/* exported reverseWord */
function reverseWord(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
  }
  return reversedWord;
}

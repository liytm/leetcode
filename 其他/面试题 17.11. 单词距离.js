/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var findClosest = function (words, word1, word2) {
  let n = words.length
  let result = 0
  let word1Indexs = []
  let word2Indexs = []
  for (let i = 0; i < n; i++) {
      if (words[i] === word1) {
          word1Indexs.push(i)
      }
      if (words[i] === word2) {
          word2Indexs.push(i)
      }
  }
  for (let i = 0; i < word1Indexs.length; i++) {
      for (let j = 0; j < word2Indexs.length; j++) {
          let curPath = Math.abs(word1Indexs[i] - word2Indexs[j])
          if(result === 0 || curPath < result) {
              result = curPath
          }
      }
  }
  return result
};
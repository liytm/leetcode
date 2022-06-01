/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 初始化a-z字典数组
  let index = new Array(26).fill(0)
  // 将order字典映射到index，order每个字母在a-z（97-122）中的相对charCode，以及对应的升序字典的序号
  for(let i = 0;i<order.length;i++) {
    index[order[i].charCodeAt()- 'a'.charCodeAt()] = i
  }
  // 遍历words
  for(let i = 1;i<words.length; i++) {
    // 两两字符串逐个字符比较相对charCode在升序中的排序，
    let isValidate = false
    let len = Math.min(words[i-1].length, words[i].length)
    for(let j = 0;j< len; j ++) {
      let prev = index[words[i-1][j].charCodeAt() - 'a'.charCodeAt()]
      let curr = index[words[i][j].charCodeAt() - 'a'.charCodeAt()]
      // 如果prev < curr ，则prev所在字符串排在curr所在字符串前面，符合条件，isValidate设置成true，
      // 然后跳出当前两个字符串的比较循环，继续比较下两个单词直到结束
      if(prev < curr) {
        isValidate = true
        break
      }
      // 如果 prev > curr，则prev所在字符串排在curr所在字符串后面，不符合条件，直接返回false，over
      if(prev > curr) {
        return false
      }
    }
    // 如果两个单词比较完后，isValidate 还是false，则prev一直等于curr，words[i-1].length等于words[i].length，
    // 但是也有可能，长度不一样，比如app, apple，因为空格比所有字母的顺序都小，所以[app,apple]是符合条件的，但是[apple,app]，l>空格，不符合，
    // 所以当words[i-1].length > words[i].length时，不符合条件
    if(!isValidate) {
      if(words[i-1].length > words[i].length) {
         return false
      }
    }
  }
  return true
}

// @lc code=end

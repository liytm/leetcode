/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // hash表
  const sortMap = new Map()
  const cache = [...arr]
  arr.sort((a, b) => a - b)
  let sortIndex = 1
  let lastNum
  arr.forEach((num) => {
    if(num !== lastNum) {
      lastNum = num
      sortMap.set(num, sortIndex)
      sortIndex++
    }
  })
  return cache.map(num => sortMap.get(num))
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let count = 0
  let hash = new Map()
  for (let i = 0; i < indices.length; i++) {
    const [row, col] = indices[i]
    for (let j = 0; j < n; j++) {
      let key = `${row}-${j}`
      const cur = hash.get(key)
      if (cur) {
        hash.set(key, cur + 1)
      } else {
        hash.set(key, 1)
      }
    }
    for (let j = 0; j < m; j++) {
      let key = `${j}-${col}`
      const cur = hash.get(key)
      if (cur) {
        hash.set(key, cur + 1)
      } else {
        hash.set(key, 1)
      }
    }
  }
  for(const [key,value] of hash) {
    if(value & 1 === 1) {
      count++
    }
  }
  return count
}
// @lc code=end

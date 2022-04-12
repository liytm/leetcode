/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = 0
  let total = 0
  let len = 0
  nums.forEach(num => {
    total += num
    len += 1
    if(total >= target) {
        if(result === 0) {
            result = len
        }
        if(result !== 0 && len < result) {
            result = len
        }
        console.log('result', result)
        len = 0
        total = 0
    }
  })
  return result
}
// @lc code=end

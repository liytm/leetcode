/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// indexof
// var twoSum = function(nums, target) {
//   let left = 0
//   while(left < nums.length) {
//     console.log('left', left)
//     const currentIndex = nums.indexOf(target - nums[left])
//     if(currentIndex !== -1 && left !== currentIndex) {
//       return [left, currentIndex]
//     }
//     left += 1
//   }
// };

// 哈希表
var twoSum = function(nums, target) {
  const len = nums.length
  const map = new Map()
  for(let i = 0; i < len; i++) {
    const current = target - nums[i]
    if(map.has(current)) {
      return [i, map.get(current)]
    }
    map.set(nums[i], i)
  }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length
  while(right - left > 0) {
    let mid = Math.floor((left + right)/2)
    const midNumber = nums[mid]
    if(target === midNumber) {
      return mid
    }
    if(target === nums[mid + 1]) {
      return mid + 1
    }
    if(target > midNumber) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return -1
};
// @lc code=end
// console.log(search([-1,0,3,5,9,12],2))
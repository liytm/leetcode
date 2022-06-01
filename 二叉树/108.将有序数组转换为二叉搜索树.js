/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let helper = (nums, left, right) => {
  // 如果left>right，则区间为空
  if (left > right) return null

  // 以中间左边节点为根节点
  let mid = Math.floor((left + right) / 2)
  let root = new TreeNode(nums[mid])
  // 然后不断得缩小区间，直到left>right,遍历结束
  root.left = helper(nums, left, mid - 1)
  root.right = helper(nums, mid + 1, right)
  return root
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1)
}

// @lc code=end

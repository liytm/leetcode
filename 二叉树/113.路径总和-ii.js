/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function (root, targetSum) {
  if(!root) return []
  const ans = []
  const queue = [[root,root.val,[root.val]]]
  while(queue.length) {
    const [node,total,path] = queue.shift()
    const left = node.left
    const right = node.right
    if(!left && !right && total === targetSum) {
      ans.push(path)
    }
    if(left) {
      queue.push([left,left.val+total,[...path,left.val]])
    }
     if(right) {
      queue.push([right,right.val+total,[...path,right.val]])
    }
  }
  return ans
}
// @lc code=end

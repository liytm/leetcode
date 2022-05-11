/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     if(!root) return []
//     let left = inorderTraversal(root.left)
//     let right = inorderTraversal(root.right)
//     return [...left,root.val,...right]
// };

// 迭代自创
// var inorderTraversal = function(root) {
//     let ans = []
//     if(!root) return ans
//     let stack = [root]
//     while(stack.length) {
//         let cur = stack.pop()
//         if(cur.right) {
//             stack.push(cur.right)
//         }
//         if(cur.left) {
//             let left = cur.left
//             cur.left = null
//             cur.right = null
//             stack.push(cur)
//             stack.push(left)
//             continue
//         }
//         ans.push(cur.val)
       
//     }
//     return ans
// };
var inorderTraversal = function(root) {
    let ans = []
    let stack = []
    while(root || stack.length) {
      while(root) {
        stack.push(root)
        root = root.left
      }
      //步骤1完成，开始出栈
      root = stack.pop()
      ans.push(root.val)
      root = root.right
    }
    return ans
};
// @lc code=end


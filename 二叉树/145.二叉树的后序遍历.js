/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// 破坏树结构
// var postorderTraversal = function(root) {
//     if(!root) return []
//     let left = postorderTraversal(root.left)
//     let right = postorderTraversal(root.right)
//     return [...left,...right,root.val]
// };


// var postorderTraversal = function(root) {
//     let ans = []
//     let stack = []
//     let prev = null
//     while(root || stack.length) {
//         // 先遍历到最左
//         while(root) {
//             stack.push(root)
//             root = root.left
//         }
//         // 出栈
//         root = stack.pop()
//         // 如果当前节点没有右节点，或者右节点等于上一个进入答案得节点，则证明是最后一个，加入答案，prev设置为该节点，然后继续出栈（root = null）
//         if(!root.right || root.right && root.right === prev) {
//             ans.push(root.val)
//             prev = root
//             root = null
//         } else {
//             // 如果有有节点，且没有遍历加入答案，则入栈，继续向右
//             stack.push(root)
//             root = root.right
//         }

//     }
//     return ans
// }

/**
 * @morris
 */
// var addPath = (ans,node) => {
//     let count = 0
//     while(node) {
//         count++
//         ans.push(node.val)
//         node = node.right
//     }
//     let left = ans.length - count
//     let right = ans.length - 1
//     while(left < right) {
//         let temp = ans[left]
//         ans[left] = ans[right]
//         ans[right] = temp
//         left++
//         right--
//     }
// }
// var postorderTraversal = function(root) {
//      let ans = []
//      if(!root) return ans
//      let cur = root 
//      let next = null
//      while(cur) {
//         next = cur.left
//         // 如果左节点存在，则进行链接
//         if(next) {
//             // 找到最右侧节点，
//             while(next.right && next.right !== cur) {
//                 next =next.right
//             }
//             // 如果该节点为null，则进行链接
//             if(next.right === null) {
//                 next.right = cur
//                 cur = cur.left
//                 continue
//             } else {
//                 // 如果是最右侧节点，且链接了根节点，则断开
//                 next.right = null
//                 addPath(ans,cur.left)
//             }
//         }
//         cur = cur.right
//      }
//      addPath(ans,root)
//      return ans
// }
// 前序逆序加入答案
var postorderTraversal = function(root) {
    let ans = []
    if(!root) return []
    let stack = [root]
    while(stack.length) {
      let cur = stack.pop()
      ans.unshift(cur.val)
      if(cur.left) {
        stack.push(cur.left)
      }
      if(cur.right) {
        stack.push(cur.right)
      }
    }
    return ans
}
// @lc code=end


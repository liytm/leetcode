/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//     let result = []
//     // 如果root为空，则返回空数组
//     if(!root) return result
//     let cur = root // 当前节点指针
//     let next = null // 下个节点指针，前序从左开始

//     while(cur) {
//         next = cur.left
//         // 如果左侧节点存在，则进行链接，或者断开链接进入下一个右节点
//         if(next) {
//             // 找到最右侧节点，该节点不为null和不指向cur节点
//             while(next.right && next.right !== cur) {
//                 next = next.right
//             }
//             // 如果最右侧节点没有指向cur，则添加链接，并将cur加入到结果，进行下一个循环
//             if(!next.right) {
//                 next.right = cur
//                 result.push(cur.val)
//                 cur = cur.left
//                 continue // 跳出当前代码，继续while
//             } else {
//                 // 如果指向cur，则断开链接，并返回上一个节点
//                 next.right = null
//             }
//         } else {
//             result.push(cur.val)
//         }
//         cur = cur.right
//     }
//     return result

// };
// 栈迭代
var preorderTraversal = function (root) {
  let ans = []
  if (!root) return []
  let stack = [root]
  while (stack.length) {
    let cur = stack.pop()
    ans.push(cur.val)
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  return ans
}

// @lc code=end

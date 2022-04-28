/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 迭代
 * @param {*} head 
 * @returns 
 */
// var reverseList = function (head) {
//   let prev = null
//   let cur = head
//   while(cur) {
//     let next = cur.next
//     cur.next = prev
//     prev = cur
//     cur = next
//   }
//   return prev
// }

// 递归
var reverseList = function (head) {
    if(!head || !head.next) return head
    let cur = reverseList(head.next)
    head.next.next = head
    head.next = null
    return cur
  }
// @lc code=end

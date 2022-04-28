/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 哈希表
// var hasCycle = function (head) {
//   if (!head || !head.next) return false
//   let hash = new Map()
//   while (head) {
//     if (hash.has(head)) {
//       return true
//     } else {
//       hash.set(head)
//       head = head.next
//     }
//   }
//   return false
// }
// 快慢指针，快指针head.next,慢指针head，
// 快指针一次走两步，慢指针一次走1步，
// 如果环形，则快慢会重合
var hasCycle = function (head) {
    if (!head || !head.next) return false
    let fast = head.next
    let slow = head
    while(head) {
        if(fast === slow) {
            return true
        }
        fast = fast?.next?.next
        if(!fast) return false
        slow = slow.next
        head = head.next
    }
    return false
  }
// @lc code=end

/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// 迭代
// var removeElements = function(head, val) {
//     let firstListNode = new ListNode()
//     firstListNode.next = head
//     const result = firstListNode
//     while(firstListNode.next) {
//         if(firstListNode.next.val === val) {
//             firstListNode.next = firstListNode.next.next
//         } else {
//             firstListNode = firstListNode.next
//         }
//     }
//     return result.next
// };

//递归
var removeElements = function(head, val) {
    if(head === null) return null
    head.next = removeElements(head.next,val)
    return head.val === val ? head.next : head
};
// @lc code=end


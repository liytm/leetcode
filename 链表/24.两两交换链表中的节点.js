/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// 递归
// var swapPairs = function(head) {
//     if(!head || !head.next) return head
//     const newHead = head.next
//     head.next = swapPairs(newHead.next)
//     newHead.next = head
//     return newHead
// }; 
// 迭代
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let dummy = new ListNode()
    temp = dummy
    dummy.next = head
    while(temp?.next?.next) {
        // temp -> node1 -> node2 -> node3
        // temp -> node2 -> node1 -> node3
        // 最后temp跳至node1，循环temp -> node1...
        const node1 = temp.next
        const node2 = temp.next.next
        const node3 = node2.next
        temp.next = node2
        node1.next = node3
        node2.next = node1
        temp = node1
    }
    return dummy.next
}; 
// @lc code=end


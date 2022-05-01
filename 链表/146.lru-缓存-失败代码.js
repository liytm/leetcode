/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  let dummyNode = new ListNode(null)
  this.hashMap = new Map()
  // 最后一个节点的前一个指针
  this.lastIndex = dummyNode
  this.keyList = dummyNode
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.hashMap.has(key)) return -1
  const { value, head: prevNode } = this.hashMap.get(key)
  if (prevNode?.next?.next) {
    const currentNode = prevNode.next
    prevNode.next = prevNode.next.next
    currentNode.next = null
    this.lastIndex.next = currentNode
    this.hashMap.set(key, { value, head: this.lastIndex })
    //   处理下一个的链表关系
    const nextKey = prevNode.next.next.val
    console.log('nextKey', nextKey)
    const nextVal = this.hashMap.get(nextKey).value
    this.hashMap.set(nextKey, { value: nextVal, head: prevNode })
    this.lastIndex = this.lastIndex.next
  }
  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hashMap.has(key)) {
    const prevNode = this.hashMap.get(key).head
    if (prevNode?.next?.next) {
      const currentNode = prevNode.next
      prevNode.next = prevNode.next.next
      currentNode.next = null
      this.lastIndex.next = currentNode
      this.hashMap.set(key, { value, head: this.lastIndex })
      //   处理下一个的链表关系
      const nextKey = prevNode.next.next.val
      const nextVal = this.hashMap.get(nextKey).value
      this.hashMap.set(nextKey, { value: nextVal, head: prevNode })
      this.lastIndex = this.lastIndex.next
    } else {
      this.hashMap.set(key, { value, head: prevNode })
    }
  } else {
    this.lastIndex.next = new ListNode(key)
    if (this.hashMap.size === this.capacity) {
      this.hashMap.delete(this.keyList.next.val)
      this.keyList.next = this.keyList.next.next
      //   处理下一个的链表关系
      const nextKey = this.keyList.next.val
      const nextVal = this.hashMap.get(nextKey)
      if(nextVal) {
          this.hashMap.set(nextKey, { value: nextVal, head: this.keyList })
      }
    }
    this.hashMap.set(key, { value, head: this.lastIndex })
    this.lastIndex = this.lastIndex.next
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

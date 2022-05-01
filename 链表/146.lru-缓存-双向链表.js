/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
 class DListNode {
  constructor(key,value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.dummyHead = new DListNode()
    this.dummyTail = new DListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }
  get(key) {
    const node = this.map.get(key)
    if(!node) return -1
    this.move2Head(node)
    return node.value
  }
  put(key, value) {
    const node = this.map.get(key)
    if(node) {
      node.value = value
      this.move2Head(node)
      this.map.set(key,node)
    } else {
      if(this.map.size === this.capacity) {
        this.removeLRUCacheItem(node)
      }
      const newNode = new DListNode(key,value)
      this.add2Head(newNode)
      this.map.set(key,newNode)
    }
  }
  move2Head(node) {
    this.removeFromList(node)
    this.add2Head(node)
  }
  add2Head(node) {
    node.next = this.dummyHead.next
    node.prev = this.dummyHead
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }
  removeFromList(node) {
    const prevNode = node.prev
    const nextNode = node.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
  }
  removeLRUCacheItem() {
    const removeNode = this.dummyTail.prev
    this.removeFromList(removeNode)
    this.map.delete(removeNode.key)
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

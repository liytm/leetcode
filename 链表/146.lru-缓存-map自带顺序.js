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
  this.hashMap = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const value = this.hashMap.get(key)
    if (typeof value === 'undefined') { return -1 }
    this.hashMap.delete(key)
    this.hashMap.set(key,value)
    return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if(this.hashMap.has(key)) {
        this.hashMap.delete(key)
    }
    this.hashMap.set(key,value)
    if(this.hashMap.size > this.capacity) {
        this.hashMap.delete(this.hashMap.keys().next().value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

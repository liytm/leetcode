/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 内置函数
// var mySqrt = function(x) {
//   return Math.floor(Math.exp(0.5*Math.log(x)))
// };

// 红蓝划分法，y*y <= x
var mySqrt = function(x) {
  if(x ===0 || x === 1) return x
  let l = -1
  let r = x

  while(r !== l+1) {
    let mid = Math.floor((r+l)/2)
    if(mid * mid <= x) {
      l = mid
    } else{
      r = mid
    }
  }
  return l
};
// @lc code=end

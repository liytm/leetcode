/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 分治
// var myPow = function(x, n) {
//   if (n === 0) return 1 // n=0直接返回1
//   if (n < 0) {   				//n<0时 x的n次方等于1除以x的-n次方分
//       return 1 / myPow(x, -n)
//   }
//   if (n % 2) {    //n是奇数时 x的n次方 = x*x的n-1次方
//       return x * myPow(x, n - 1)
//   }
//   return myPow(x * x, n / 2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
// };

// es7
// var myPow = function(x, n) {
//   return x**n
// };

// 二进制
var myPow = function(x, n) {
  if(n === 0) return 1
  if(n < 0) {
    n = -n
    x = 1 / x
  }
  let result = 1
  while(n) {
    console.log(x, n, result)
    if(n & 1) result *= x
    x *= x
    n >>>= 1
  }
  return result
};
// @lc code=end

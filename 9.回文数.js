/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 1. 使用字符串
  x = x + '';
  return x === x.split('').reverse().join('');

  // 2. 
};
// @lc code=end


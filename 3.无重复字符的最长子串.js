/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let num = 0,res = 0;
  let m = '';
  for (n of s) {
    if (m.indexOf(n) == -1) {
      m += n;
      num++;
      res = res < num ? num: res;
    } else {
      m += n;
      m = m.slice(m.indexOf(n)+1);
      num = m.length;
    }
  }
  return res;
};
// @lc code=end


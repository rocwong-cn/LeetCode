/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 优雅的不一定更快，还是用栈比较快哦
  /**
   * Your runtime beats 22.34 % of javascript submissions
   * Your memory usage beats 63.48 % of javascript submissions (36.2 MB)
   */
  const xStr = x + '';
  const f = x < 0;
  x = f ? xStr.slice(1, xStr.length) : xStr;
  const stack = x.split('');

  let s = '';
  while (stack.length > 0) {
    s += stack.pop();
  }
  s = f ? -Number(s): Number(s);
  const v = Math.pow(2, 31);
  const max = v - 1;
  const min = -v;
  if (s > max || s < min) {
    return 0;
  }
  return s;


  /**
   * Your runtime beats 8.01 % of javascript submissions
   * Your memory usage beats 5.22 % of javascript submissions (37 MB)
   */
  // const s = Math.sign(x);
  // const r = (Math.abs(x) + '').split('').reverse().join('') * s;
  // const v = Math.pow(2, 31);
  // if (r > v -1 || r < -v) return 0;

  // return r;
};
// @lc code=end


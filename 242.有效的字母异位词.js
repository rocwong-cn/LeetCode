/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  // 第一种方法，基于数组api操作
  // return strSort(s) === strSort(t);

  // 第二种方法，基于map，比第一种效率高哦
  const a = s.split('');
  const map = {};
  a.forEach(item => {
    if(map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  });

  const b = t.split('');
  for (let i = 0; i < b.length; i++) {
    const bn = b[i];
    if (map[bn] > 0) {
      map[bn] -= 1;
    } else {
      return false;
    }
  }
  return true;

};

var strSort = function(s) {
  return s.split('').sort().join('');
}
// @lc code=end


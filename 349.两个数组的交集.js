/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const visited = {};
  const ret = [];
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]; 
    visited[num] = num;
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (visited[num] !== undefined) {
      ret.push(num);
      visited[num] = undefined;
    }
  }
  return ret;
};
// @lc code=end


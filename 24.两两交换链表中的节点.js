/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let vHead = new ListNode(0);
  vHead.next = head;

  let cursor = vHead;
  while(cursor.next && cursor.next.next) {
    let start = cursor.next;
    let end = cursor.next.next;

    cursor.next = end;
    start.next = end.next;
    end.next = start;

    cursor = start;
  }
  return vHead.next;
};
// @lc code=end


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const isBaseCase = !head?.next;
    if (isBaseCase) return head;

    return dfs(head);                   /* Time O(N) | Space O(N) */
}

const dfs = (curr) => {
    const prev = reverseList(curr.next);/* Time O(N) | Space O(N) */

    curr.next.next = curr;
    curr.next = null;

    return prev;
};
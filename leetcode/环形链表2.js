/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
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
var detectCycle = function(head) {
  if(head == null || head.next == null){
      return false;
  }
  let slow = head;
  let fast = head.next;

  while(slow != null){
      if(slow.next == null || fast.next.next == null){
          return false;
      }
      slow = slow.next;
      fast = fast.next.next;
      if(slow == fast){
          // return true
          let theValInCycle_set = new Set();
          while(!theValInCycle_set.has(slow.val)){
              theValInCycle_set.add(slow.value);
              slow = slow.next;
          }
          while(!theValInCycle_set.has(head.val)){
              head = head.next;
          }
          return head;
      }
  }
  return false;
};
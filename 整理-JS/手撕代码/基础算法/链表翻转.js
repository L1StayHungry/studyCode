function printNode(head){
  var res=[];
  var pNode=head;
  while(pNode!=null){
    res.unshift(pNode.val);
    pNode=pNode.next;
  }
  return res;
}
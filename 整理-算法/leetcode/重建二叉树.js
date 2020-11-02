function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
  if(preorder.length == 0){
    return null
  }
  if(preorder.length == 1){
    let head = new TreeNode(preorder[0]);
    return head;
  }
  
  let head = new TreeNode(preorder[0]);
  let middleIndex = inorder.indexOf(preorder[0]);
  
  let left_inorder = inorder.slice(0,middleIndex);
  let right_inorder = inorder.slice(middleIndex+1);
  let left_preorder = preorder.splice(1,left_inorder.length);
  let right_preorder = preorder.splice(1);
  head.left = buildTree(left_preorder,left_inorder);
  head.right = buildTree(right_preorder,right_inorder);

  return head;
};

// buildTree([3,9,20,15,7],[9,3,15,20,7]);
console.log(buildTree([],[]));
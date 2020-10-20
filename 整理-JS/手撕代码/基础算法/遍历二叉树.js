// 深度遍历DFS（Depth-First Search，DFS）
//先序遍历
function DLR(tree){
  console.log(tree.value);
  if(tree.left){
      DLR(tree.left);
  }
  if(tree.right){
      DLR(tree.right);
  }
}

//中序遍历
function LDR(tree){
  if(tree.left){
      LDR(tree.left);
  }
  console.log(tree.value);
  if(tree.right){
      LDR(tree.right);
  }
}

//后序遍历
function LRD(tree){
  if(tree.left){
      LRD(tree.left);
  }
  if(tree.right){
      LRD(tree.right);
  }
  console.log(tree.value);
}

var tree = {
  value: "1",
  left: {
      value: '2',
      left: {
          value: '4',
      },
      right: {
          value: '5',
          left: {
              value: '8',
          },
          right: {
              value: '9',
          }
      }
  },
  right: {
      value: '3',
      left: {
          value: '6',
      },
      right: {
          value: '7',
      }
  }
}

DLR(tree);

LDR(tree);

LRD(tree);

// 广度遍历
// 只取出第一个元素，左右子树重新入队列
let result = [];
let stack = [tree]; // 先将要遍历的树压入栈
let count = 0; // 用来记录执行到第一层
let bfs = function () {
    let node = stack[count];
    console.log(node);
    
    if(node) {
        result.push(node.value);
        if(node.left) stack.push(node.left);
        console.log(node.left);
        
        if(node.right) stack.push(node.right);
        console.log(node.right);
        
        count++;
        bfs();
    }
}
bfs();
console.log(result);

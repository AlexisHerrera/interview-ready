// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

// 1 - 2 - 3
// 1 - 4
// 1 - 5 - 6 - 7
// [3, 5, 4] visited: {1, 2}

export class Tree<T> {
  bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (node === undefined) {
      return;
    }
    const queue = [node];

    while (queue.length > 0) {
      const curNode = queue.shift();
      visit(curNode as TreeNode<T>);
      if (curNode?.left) {
        queue.push(curNode.left);
      }
      if (curNode?.right) {
        queue.push(curNode.right);
      }
    }
  }

  dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (node === undefined) {
      return;
    }
    const stack = [node];

    while (stack.length > 0) {
      const curNode = stack.pop();
      visit(curNode as TreeNode<T>);
      if (curNode?.right) {
        stack.push(curNode.right);
      }
      if (curNode?.left) {
        stack.push(curNode.left);
      }
    }
  }
}

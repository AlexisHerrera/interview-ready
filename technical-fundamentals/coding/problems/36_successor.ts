// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(
  node: TreeNode<T>,
): TreeNode<T> | undefined {
  if (node == null) {
    return undefined;
  }
  if (node.right == null) {
    let prev = node;
    let parent = node.parent;
    while (parent?.right == prev) {
      prev = parent;
      parent = parent.parent;
    }
    return parent;
  }

  let lastNode = node.right;
  let currNode = node.right.left;
  while (currNode) {
    lastNode = currNode;
    currNode = currNode.left;
  }
  return lastNode;
}

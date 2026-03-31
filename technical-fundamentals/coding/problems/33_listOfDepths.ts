// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

export default function listOfDepths<T>(
  root: TreeNode<T> | null,
): ListNode<T>[] {
  if (root == null) {
    return [];
  }
  let queue = [root];
  const result: ListNode<T>[] = [];
  while (queue.length > 0) {
    const currLevel: TreeNode<T>[] = [];
    const nextLevelNodes = [];
    while (queue.length > 0) {
      const node = queue.shift();
      if (!node) continue;
      currLevel.push(node);
      if (node.left) nextLevelNodes.push(node.left);
      if (node.right) nextLevelNodes.push(node.right);
    }
    queue = [...nextLevelNodes];
    if (currLevel.length == 0) continue;
    const head: ListNode<T> = { value: currLevel[0].value };
    let lastNode = head;
    for (let i = 1; i < currLevel.length; i++) {
      const currentNode = { value: currLevel[i].value };
      lastNode.next = currentNode;
      lastNode = currentNode;
    }
    result.push(head);
  }

  return result;
}

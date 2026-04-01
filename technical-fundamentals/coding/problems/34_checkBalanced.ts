// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

interface CallResult {
  balanced: boolean;
  length: number;
}

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
  function lengthTree(tree?: TreeNode<T> | null): CallResult {
    if (tree == null) {
      return { balanced: true, length: 0 };
    }
    const callLeft = lengthTree(tree.left);
    if (!callLeft.balanced) {
      return callLeft;
    }
    const callRight = lengthTree(tree.right);
    if (!callRight.balanced) {
      return callRight;
    }

    const lengthLeft = callLeft.length + 1;
    const lengthRight = callRight.length + 1;
    const returnValue = {
      balanced: Math.abs(lengthLeft - lengthRight) <= 1,
      length: Math.max(lengthLeft, lengthRight),
    };

    return returnValue;
  }
  return lengthTree(tree).balanced;
}

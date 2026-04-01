// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

interface ReturnCall {
  isBST: boolean;
  max?: number;
  min?: number;
}

export default function validateBST<T extends number>(
  node: TreeNode<T> | undefined,
): boolean {
  function checkBST(node: TreeNode<T> | undefined): ReturnCall {
    if (node == null) {
      return { isBST: true };
    }

    const leftCall = checkBST(node.left);
    if (!leftCall.isBST) {
      return { isBST: false };
    }
    const rightCall = checkBST(node.right);
    if (!rightCall.isBST) {
      return { isBST: false };
    }
    const leftCheck = leftCall.max == null ? true : leftCall.max < node.value;
    const rightCheck =
      rightCall.min == null ? true : rightCall.min > node.value;
    if (leftCheck && rightCheck) {
      return {
        isBST: true,
        min: leftCall.min ? leftCall.min : node.value,
        max: rightCall.max ? rightCall.max : node.value,
      };
    }
    return { isBST: false };
  }
  const isBSTCheck = checkBST(node);
  return isBSTCheck.isBST;
}

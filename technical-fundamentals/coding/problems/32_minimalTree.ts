// 2. *Minimal Tree*:

// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.
//
// A binary search tree is a search where for each node,
// lesser elements are on the left node, and greater elements on the right node.
//
// Input: [1,2,3,4,5,6,7]
// Output:
//      4
//   2  |  6
// 1   3|5  7
//
//

// algo:
// length = 7, mid = 3 => (4).left = findMiddleNode([0, 3]), (4).right = findMiddleNode((5, 7))

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function minimalTree<T>(
  sortedArray: T[],
): TreeNode<T> | undefined {
  function formMinimalTree(start: number, end: number): TreeNode<T> {
    if (end - start == 0) {
      return { value: sortedArray[start] };
    }
    if (end - start == 1) {
      return { value: sortedArray[end], left: { value: sortedArray[start] } };
    }
    const middleNodeIndex = Math.floor((start + end) / 2);
    const leftMiddleNode = formMinimalTree(start, middleNodeIndex - 1);
    const rightMiddleNode = formMinimalTree(middleNodeIndex + 1, end);
    return {
      value: sortedArray[middleNodeIndex],
      left: leftMiddleNode,
      right: rightMiddleNode,
    };
  }
  if (sortedArray.length === 0) {
    return undefined;
  }
  return formMinimalTree(0, sortedArray.length - 1);
}

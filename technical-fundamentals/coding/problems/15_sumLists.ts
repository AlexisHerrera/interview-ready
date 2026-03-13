// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  function getNumber(node: Node<number> | undefined): number {
    if (node === undefined) {
      return 0
    }
    let numberStr = ''
    let curr: Node<number> | undefined  = node
    while (curr) {
      numberStr = `${curr.value}${numberStr}`
      curr = curr.next
    }
    return parseInt(numberStr)
  }
  function numberToList(num: number): Node<number> | undefined {
    if (isNaN(num)) {
      return undefined
    }
    const numStr = String(num)
    let lastNode: Node<number> | undefined = undefined;
    for (let i = 0; i < numStr.length; i++) {
        const newNode: Node<number> = { value: parseInt(numStr[i]), next: lastNode}
        lastNode = newNode
    }
    return lastNode
  }
  const resultNumber = getNumber(list1) + getNumber(list2)
  return numberToList(resultNumber)
}

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  function getNumber(node: Node<number> | undefined): number | undefined {
      if (node === undefined) {
        return undefined
      }
      let numberStr = ''
      let curr: Node<number> | undefined  = node
      while (curr) {
        numberStr = `${numberStr}${curr.value}`
        curr = curr.next
      }
      return parseInt(numberStr)
    }
  function numberToList(num: number | undefined): Node<number> | undefined {
    if (num === undefined || isNaN(num)) {
      return undefined
    }
    const numStr = String(num)
    let lastNode: Node<number> | undefined = undefined;
    for (let i = 0; i < numStr.length; i++) {
        const newNode: Node<number> = { value: parseInt(numStr[numStr.length - 1 - i]), next: lastNode}
        lastNode = newNode
    }
    return lastNode
  }
  const num1 = getNumber(list1)
  const num2 = getNumber(list2)
  if (num1 === undefined && num2 === undefined) {
    return undefined
  }
  const resultNumber = (getNumber(list1) ?? 0) + (getNumber(list2) ?? 0)
  return numberToList(resultNumber)
}

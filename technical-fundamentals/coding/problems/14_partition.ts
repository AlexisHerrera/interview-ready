// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.
// If x is contained within the list, the values of x only need to be after the elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// ```
import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function partition<T>(
  head: Node<T> | undefined,
  x: T,
): Node<T> | undefined {
  let curr = head
  let headLeft: Node<T> | undefined = undefined 
  let headRight: Node<T> | undefined = undefined 
  let tailLeft: Node<T> | undefined = undefined
  let tailRight: Node<T> | undefined = undefined
  while (curr) {
    if (curr.value >= x) {
      if (tailRight === undefined) {
        tailRight = curr
        headRight = curr
      } else {
        tailRight.next = curr
        tailRight = curr
      }
    } else {
      if (tailLeft === undefined) {
        tailLeft = curr
        headLeft = curr
      } else {
        tailLeft.next = curr
        tailLeft = curr
      }
    }
    curr = curr.next
    if (tailRight?.next) {
      tailRight.next = undefined
    }
    if (tailLeft?.next) {
      tailLeft.next = undefined
    }
  }
  if (tailLeft !== undefined) {
    tailLeft.next = headRight
  }
  return headLeft ? headLeft : headRight
}

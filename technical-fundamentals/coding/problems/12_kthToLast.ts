// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  if (k < 1) {
    return undefined
  }
  let result: Node<T> | undefined = head
  let visited = 1
  let current = head.next
  while (current) {
    if (visited >= k && result) {
      result = result.next
    }
    current = current.next
    visited += 1
  }
  return visited >= k ? result : undefined
}

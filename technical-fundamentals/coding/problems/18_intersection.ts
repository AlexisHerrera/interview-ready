// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const visited: Set<Node<T>> = new Set()
  let current = list1
  while (current) {
    visited.add(current)
    current = current.next
  }
  current = list2
  while (current) {
    if (visited.has(current)) {
      break
    }
    current = current.next
  }
  return current
}

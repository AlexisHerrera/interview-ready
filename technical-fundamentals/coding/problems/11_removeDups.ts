// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  if (!head) {
    return undefined
  }
  let prev = head
  const valuesSaved: Set<T> = new Set([prev.value])
  let current = head?.next
  while (current) {
    if (valuesSaved.has(current.value)) {
        prev.next = undefined
      } else {
        prev.next = current
        prev = current
    }
    valuesSaved.add(current.value)
    current = current.next
  }
  return head
}


function removeDupsSorted<T>(head?: Node<T>): Node<T> | undefined {
  let prev = head
  let current = head?.next
  while (current) {
    if (current.value === prev?.value) {
      prev.next = undefined
    } else if (prev) {
      prev.next = current
      prev = current
    }
    current = current.next
  }
  return head
}

// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

// Method:
// 1. Go to the middle of the list
// 2. Reverse the list from the middle and don't miss the middle of the list 
// 3. From the pointer of the head and from pointer in the middle of the list, start comparing until Math.ceil(length / 2)
// eg 1:
// 1. A->B->C->C->B->A | head=A, middle=C (index=3), length=6
// 2. A->B->C A->B->C | head=A, middle=A (index=3)
// 3. A vs A, B vs B, C vs Cl => OK

// eg 2:
// 1. A->B->C->D->C->B->A | head=A, middle=D (index=3), length = 7 
// 2. A->B->C A->B->C->D | head=A, middle=A (index=3)
// 3. A vs A, B vs B, C vs C => OK

// edge cases:
// length < 3 => return true
export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  function getLengthList(head: Node<T> | undefined): number {
    let length = 0
    let current = head
    while (current) {
      length += 1
      current = current.next
    }
    return length
  }

  function getKthNode(head: Node<T> | undefined, index: number): Node<T> | undefined {
    let length = 0
    let current = head
    while (current) {
      if (index === length) {
        return current
      }
      length += 1
      current = current.next
    }
    return undefined
  }

  function reverseList(head: Node<T> | undefined): Node<T> | undefined {
    let prevNode = head
    let current = head?.next
    while (current) {
      // save next and updates
      const nextNode = current.next
      current.next = prevNode
      // Updates pointers
      prevNode = current
      current = nextNode
    }
    return prevNode
  }

  function compareListUpToKth(l1: Node<T> | undefined, l2: Node<T> | undefined, index: number): boolean {
    let p1 = l1
    let p2 = l2
    let count = 0
    while (count < index) {
      if (p1?.value !== p2?.value) {
        return false
      }
      p1 = p1?.next
      p2 = p2?.next
      count += 1
    }
    return true
  }

  const length = getLengthList(head)
  if (length < 3) {
    return true
  }
  const middleIndex = Math.floor(length / 2)
  // console.log('Length:', length, 'Middle:', middleIndex)
  const middleNode = getKthNode(head, middleIndex)
  // console.log('Middle Node:', middleNode?.value)
  const reversedList = reverseList(middleNode)
  // console.log('Reversed list header:', reversedList)
  return compareListUpToKth(head, reversedList, middleIndex)
}

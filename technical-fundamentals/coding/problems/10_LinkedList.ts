// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = head
  }

  push(value: T) {
    const node: Node<T> = {next: undefined, value}
    if (this.tail) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
  }
  filter(callback: (val: T) => boolean) {
    let last: Node<T> | undefined = undefined;
    let tail: Node<T> | undefined = undefined;
    let current = this.head
    while (current) {
      if (callback(current.value)) {
        if (!last) {
          this.head = current
        } else {
          last.next = current
        }
        last = current
        tail = current
      } else if (last?.next) {
        last.next = undefined
      }
      current = current.next
    }
    if (!last) {
      this.head = undefined
    }
    this.tail = tail
  }
  visit() {}
  remove() {}
  merge() {}
  print() {
    let currentNode = this.head
    let toPrint = ''
    while (currentNode) {
      toPrint = toPrint + String(currentNode.value) + ' -> '
      currentNode = currentNode.next
    }
    console.log('Head:', this.head?.value, 'Tail:', this.tail?.value)
    console.log(toPrint)
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length: number;
}

// To execute this code, under the directory technical-fundamentals run: 
// npx tsx coding/problems/10_LinkedList.ts
const list = new LinkedList<number>();
// list.push(10)
// list.push(20)
// list.push(20)
// list.push(30)
list.filter((val) => val !== 20)
list.print()
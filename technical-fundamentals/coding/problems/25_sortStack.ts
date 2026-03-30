// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
  private stack: T[];
  private auxStack: T[];
  constructor() {
    this.stack = [];
    this.auxStack = [];
  }

  push(value: T): void {
    let currMin = this.peek();
    while (currMin && currMin < value) {
      this.auxStack.push(this.stack.pop() as T);
      currMin = this.peek();
    }
    this.stack.push(value);
    let rem = this.auxStack.pop();
    while (rem) {
      this.stack.push(rem);
      rem = this.auxStack.pop();
    }
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

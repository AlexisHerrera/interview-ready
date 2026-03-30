// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
  private stacks: T[][];
  private capacity: number;
  constructor(capacity: number) {
    this.stacks = [];
    this.capacity = capacity;
  }

  push(value: T): void {
    if (this.stacks.length === 0) {
      this.stacks.push([value]);
      return;
    }
    const currentStack = this.stacks[this.stacks.length - 1];
    if (currentStack.length == this.capacity) {
      this.stacks.push([value]);
    } else {
      currentStack.push(value);
    }
    // console.log("Push:", value, "current state:", this.stacks);
  }

  pop(): T | undefined {
    if (this.stacks.length === 0) {
      return;
    }
    const currentStack = this.stacks[this.stacks.length - 1];
    const value = currentStack.pop();
    if (currentStack.length === 0) {
      this.stacks.pop();
    }
    return value;
  }
}

// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
  private q1: T[];
  private q2: T[];
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  enqueue(value: T): void {
    if (this.q2.length == 0) {
      this.q1.push(value);
      return;
    }
    let val = this.q2.pop();
    while (val) {
      this.q1.push(val);
      val = this.q2.pop();
    }
    this.q1.push(value);
  }

  dequeue(): T | undefined {
    if (this.q2.length > 0) {
      return this.q2.pop();
    }
    let val = this.q1.pop();
    while (val) {
      this.q2.push(val);
      val = this.q1.pop();
    }
    return this.q2.pop();
  }

  peek(): T | undefined {
    if (this.q2.length > 0) {
      return this.q2[this.q2.length - 1];
    }
    let val = this.q1.pop();
    while (val) {
      this.q2.push(val);
      val = this.q1.pop();
    }
    return this.q2[this.q2.length - 1];
  }

  isEmpty(): boolean {
    return this.q1.length === 0 && this.q2.length === 0;
  }
}

// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
  private values: T[];
  private mins: T[];
  constructor() {
    this.values = [];
    this.mins = [];
  }

  push(value: T): void {
    const currMin = this.min();
    if (currMin == null || value <= currMin) {
      this.mins.push(value);
    }
    this.values.push(value);
  }

  pop(): T | undefined {
    const poppedValue = this.values.pop();
    if (poppedValue == null) {
      return;
    }
    const currMin = this.min();
    if (poppedValue == currMin) {
      this.mins.pop();
    }
    return poppedValue;
  }

  min(): T | undefined {
    return this.mins[this.mins.length - 1];
  }
}

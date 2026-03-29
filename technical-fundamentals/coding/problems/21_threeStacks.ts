// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: T[];
  private limits: { current: number; min: number; max: number }[];
  constructor(arrayLength: number) {
    this.array = Array.from({ length: arrayLength });
    const lengthQueue = Math.floor(arrayLength / 3);
    this.limits = [
      { current: 0, min: 0, max: lengthQueue },
      { current: lengthQueue, min: lengthQueue, max: 2 * lengthQueue },
      { current: 2 * lengthQueue, min: 2 * lengthQueue, max: arrayLength },
    ];
  }

  push(stackNum: number, value: T): void {
    if (stackNum >= this.limits.length) {
      return;
    }
    const { current, max } = this.limits[stackNum];
    if (current + 1 > max) {
      return;
    }
    this.array[current] = value;
    this.limits[stackNum].current += 1;
  }

  pop(stackNum: number): T | undefined {
    if (stackNum >= this.limits.length) {
      return;
    }
    const { current, min } = this.limits[stackNum];
    if (current - 1 < min) {
      return undefined;
    }
    const value = this.array[current - 1];
    this.limits[stackNum].current -= 1;
    return value;
  }

  peek(stackNum: number): T | undefined {
    if (stackNum >= this.limits.length) {
      return;
    }
    const { current, min } = this.limits[stackNum];
    if (current - 1 < min) {
      return undefined;
    }
    return this.array[current - 1];
  }
}

// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

interface AnimalRegister {
  animal: Animal;
  animalNo: number;
}

export default class AnimalShelter {
  private dogQueue: AnimalRegister[];
  private catQueue: AnimalRegister[];
  private animalNo: number;

  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.animalNo = 0;
  }

  enqueue(type: AnimalType): void {
    if (type == "cat") {
      this.catQueue.push({ animal: new Animal(type), animalNo: this.animalNo });
    } else {
      this.dogQueue.push({ animal: new Animal(type), animalNo: this.animalNo });
    }
    this.animalNo += 1;
    // console.log(
    //   "Queue Dog:",
    //   this.dogQueue,
    //   "Queue cat:",
    //   this.catQueue,
    //   "seqno:",
    //   this.animalNo,
    // );
  }

  dequeueAny(): Animal | undefined {
    const olderDog = this.dogQueue[0];
    const olderCat = this.catQueue[0];

    // console.log("Older dog:", olderDog, "Older cat:", olderCat);

    if (olderCat == null && olderDog == null) {
      return undefined;
    }

    if (olderDog && olderCat == null) {
      const dog = this.dogQueue.shift();
      return dog == null ? undefined : dog.animal;
    }
    if (olderCat && olderDog == null) {
      const cat = this.catQueue.shift();
      return cat == null ? undefined : cat.animal;
    }
    if (olderDog.animalNo < olderCat.animalNo) {
      const dog = this.dogQueue.shift();
      return dog == null ? undefined : dog.animal;
    }
    const cat = this.catQueue.shift();
    return cat == null ? undefined : cat.animal;
  }

  dequeueDog(): Animal | undefined {
    const dog = this.dogQueue.shift();
    return dog == null ? undefined : dog.animal;
  }

  dequeueCat(): Animal | undefined {
    const cat = this.catQueue.shift();
    return cat == null ? undefined : cat.animal;
  }
}

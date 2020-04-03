/// <reference path="person.ts" />


class Player implements Person {
  name: string;
  // age?: string;
  highScore: number;

  formatName() {
    return this.name.toUpperCase();
  }
}


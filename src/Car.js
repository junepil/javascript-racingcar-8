import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const number = Random.pickNumberInRange(0, 9);

    if (number >= 4)
      this.position += 1;
  }
}

export default Car;
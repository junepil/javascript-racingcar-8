/* eslint-disable no-restricted-syntax */
import Car from "./Car";

class Game {
  constructor(carNames, maxTurn) {
    this.cars = carNames.map((name) => new Car(name));
    this.maxTurn = maxTurn;
    this.currentTurn = 0;
    this.history = [];
  }

  play() {
    while (this.currentTurn < this.maxTurn) {
      this.playOneTurn();
      this.saveHistory();
    }
  }

  playOneTurn() {
    this.currentTurn += 1;

    for (const car of this.cars)
      car.move()
  }

  saveHistory() {
    const record = this.cars.map(({ name, position }) => (
      { name, position }
    ))

    this.history.push(record);
  }

  getMaxProgress() {
    return this.cars.reduce((prevMax, car) => 
      Math.max(prevMax, car.position), 0
    )
  }

  getWinner() {
    const winners = [];
    const maxProgress = this.getMaxProgress();

    for (const car of this.cars) {
      if (car.position === maxProgress)
        winners.push(car.name);
    }

    return winners;
  }
}

export default Game;
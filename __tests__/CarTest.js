import Car from '../src/Car.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandomInteger = (inputs) => {
  Random.pickNumberInRange = jest.fn();

  Random.pickNumberInRange.mockImplementation(() => {
    const input = inputs.shift();
    return input;
  });
}

describe('Car', () => {
  const car = new Car('sam');

  test('constructor', () => {
    expect(car.position).toBe(0);
  })
  test('move car', () => {
    const inputs = [4, 3];
    const outputs = [1, 1];
    mockRandomInteger(inputs);

    for (const output of outputs) {
      car.move();
      expect(car.position).toBe(output);
    }
  })
})
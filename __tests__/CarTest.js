import Car from '../src/Car.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandomInteger = (input) => {
  Random.pickNumberInRange = jest.fn();

  Random.pickNumberInRange.mockImplementation(() => {
    return input;
  });
}

describe('Car', () => {
  const car = new Car('sam');

  it('creates new car instance', () => {
    expect(car.position).toBe(0);
  })
  it.each([
    [4, 1],
    [3, 1]
  ])
    ('moves car forward with %s', (input, output) => {
    mockRandomInteger(input);

    car.move();
    expect(car.position).toBe(output);
  })
})
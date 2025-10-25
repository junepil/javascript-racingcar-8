import { Console } from '@woowacourse/mission-utils';
import {
  CustomError,
  InvalidCarNameError,
  InvalidTurnError,
} from '../error/index.js';

function parseCars(input) {
  const cars = input.split(',');

  for (const car of cars) {
    if (car.length > 5) throw new InvalidCarNameError();
    if (car.length === 0)
      throw new InvalidCarNameError('Car name can not be blank');
  }

  return cars;
}

async function getCarNames() {
  const input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );

  const cars = parseCars(input);

  return cars;
}

function parseTurns(input) {
  const turns = parseInt(input, 10);

  if (turns <= 0) throw new InvalidTurnError();

  if (Number.isNaN(turns)) throw new InvalidTurnError();
  
  return turns;
}

async function getTurns() {
  const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  const turns = parseTurns(input);

  return turns;
}

function printWinner(winner) {
  const winnerString = winner.join(', ');

  Console.print(`최종 우승자 : ${winnerString}\n`);
}

function printGameHistory(gameHistory) {
  Console.print('실행 결과\n');

  for (const turn of gameHistory) {
    for (const { name, position } of turn) {
      const track = '-'.repeat(position);

      Console.print(`${name} : ${track}\n`);
    }
    Console.print('\n');
  }
}

export { getCarNames, getTurns, printWinner, printGameHistory };

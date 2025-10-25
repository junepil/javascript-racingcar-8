import {
  getCarNames,
  getTurns,
  printGameHistory,
  printWinner,
} from '../src/util/IOHandler.js';
import { Console } from '@woowacourse/mission-utils';

const ERROR_STRING = '[ERROR]';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('IO handler', () => {
  describe('getCarNames', () => {
    test('success', async () => {
      const inputs = ['sam', 'sam,alex,tom'];
      const outputs = [['sam'], ['sam', 'alex', 'tom']];

      mockQuestions(inputs);
      for (const output of outputs) {
        const result = await getCarNames();

        expect(result).toEqual(output);
      }
    });
    test('fail', async () => {
      const inputs = [
        '',
        'pineapple, apple',
        '엄청큰자동차, 엄청빠른자동차',
        'alex,,bob,',
      ];

      mockQuestions(inputs);
      for (let i = 0; i < inputs.length; i++) {
        // will this work?
        await expect(getCarNames()).rejects.toThrow(ERROR_STRING);
      }
    });
  });
  describe('getTurns', () => {
    test('success', async () => {
      const inputs = ['4'];
      const output = 4;
      mockQuestions(inputs);

      const result = await getTurns();
      expect(result).toBe(output);
    });
    test('fail', async () => {
      const inputs = ['0', '-3', '3.14', 'twice'];
      mockQuestions(inputs);

      for (const input of inputs) {
        await expect(getTurns()).rejects.toThrow(ERROR_STRING);
      }
    });
  });
  test('printWinner', () => {
    const input = ['john', 'sam'];
    const output = 'john, sam';

    const logSpy = getLogSpy();
    printWinner(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  test('printGameHistory', () => {
    const input = [
      [
        { name: 'john', position: 1 },
        { name: 'sam', position: 2 },
      ],
      [
        { name: 'john', position: 2 },
        { name: 'sam', position: 3 },
      ],
    ];
    const outputs = ['john : -', 'sam : --', 'john : --', 'sam : ---'];
    const logSpy = getLogSpy();
    printGameHistory(input);

    for (const output of outputs) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    }
  });
});

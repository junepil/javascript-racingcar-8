import {
  getCarNames,
  getTurns,
  printGameHistory,
  printWinner,
} from '../src/util/IOHandler.js';
import { Console } from '@woowacourse/mission-utils';

const ERROR_STRING = '[ERROR]';

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
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
    it.each([
      ['sam', ['sam']],
      ['sam,alex,tom', ['sam', 'alex', 'tom']]
    ])
      ('parse names in %s', async (input, output) => {

      mockQuestion(input);
      const result = await getCarNames();

      expect(result).toEqual(output);
    });
    it.each([
      [''],
      ['pineapple, apple'],
      ['엄청큰자동차, 엄청빠른자동차'],
      ['alex,,bob,']
    ])
      ('throws error with input %s', async (input) => {

      mockQuestion(input);
      
      await expect(getCarNames()).rejects.toThrow(ERROR_STRING);
    });
  });
  describe('getTurns', () => {
    it.each([
      ['4', 4],
      ['3.14', 3]
    ])('parse turns to number with %s', async (input, output) => {
      mockQuestion(input);

      const result = await getTurns();
      expect(result).toBe(output);
    });
    it.each([
      ['0'],
      ['-3'],
      ['twice']
    ])('throws error with input %s', async (input) => {
      mockQuestion(input);
      
      await expect(getTurns()).rejects.toThrow(ERROR_STRING);
    });
  });
  it('prints winner using name array', () => {
    const input = ['john', 'sam'];
    const output = 'john, sam';

    const logSpy = getLogSpy();
    printWinner(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  it('prints entire game history', () => {
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

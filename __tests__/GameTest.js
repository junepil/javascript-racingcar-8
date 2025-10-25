import Car from '../src/Car.js';
import Game from '../src/Game.js';

jest.mock('../src/Car.js');

const mockedCars = [
  { position: 2, name: 'sam' },
  { position: 3, name: 'bob' },
];

describe('Game', () => {
  const carNames = ['sam', 'bob'];
  const turns = 5;
  let game = null;

  beforeEach(() => {
    game = new Game(carNames, 5);
  })

  it('calls car class and initialize properties', () => {
    expect(Car).toHaveBeenCalledTimes(carNames.length);
    expect(game.currentTurn).toBe(0);
    expect(game.maxTurn).toBe(turns);
    expect(game.history).toEqual([]);
  });
  it('proceeds game until the end', () => {
    const spyPlayOneTurn = jest.spyOn(game, 'playOneTurn');
    const spySaveHistory = jest.spyOn(game, 'saveHistory');

    game.play();
    expect(spyPlayOneTurn).toHaveBeenCalledTimes(turns);
    expect(spySaveHistory).toHaveBeenCalledTimes(turns);
  });
  it('calculates max progress', () => {
    jest.replaceProperty(game, 'cars', mockedCars);
    const maxProgress = 3;
    const spyGetMaxProgress = jest.spyOn(game, 'getMaxProgress');

    game.getMaxProgress();
    expect(spyGetMaxProgress).toHaveReturnedWith(maxProgress);
  });
  it('returns winner', () => {
    jest.replaceProperty(game, 'cars', mockedCars);
    const spyGetMaxProgress = jest.
      spyOn(game, 'getMaxProgress').
      mockImplementation(() => 3);
    const spyGetWinner = jest.spyOn(game, 'getWinner');

    game.getWinner();
    expect(spyGetWinner).toHaveReturnedWith(['bob']);
  });
  it('saves current state to history', () => {
    jest.replaceProperty(game, 'cars', mockedCars);
    const spySaveHistory = jest.spyOn(game, 'saveHistory');
    const result = [
      { position: 2, name: 'sam' },
      { position: 3, name: 'bob' },
    ];
    
    game.saveHistory();

    const record = game.history[0];
    expect(record).toEqual(result);
  });
})
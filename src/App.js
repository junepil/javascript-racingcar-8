import Game from './Game.js';
import {
  getCarNames,
  getTurns,
  printGameHistory,
  printWinner,
} from './util/IOHandler.js';

class App {
  async run() {
    const carNames = await getCarNames();
    const turns = await getTurns();
    const game = new Game(carNames, turns);

    game.play();

    printGameHistory(game.history);
    printWinner(game.getWinner());
  }
}

export default App;

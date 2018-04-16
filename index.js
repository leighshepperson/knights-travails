const program = require('commander');
const KnightsTravails = require('./src/modules/KnightsTravails');
const ChessSquare = require('./src/modules/ChessSquare');

program.version('1.0.0').description('Knights Travails');

const validateInput = (startSquare, endSquare) => {
  ChessSquare.parse(startSquare);
  ChessSquare.parse(endSquare);
};

program
  .command('shortestPath <startSquare> <endSquare>')
  .alias('sp')
  .description(
    `Returns the shortest path a knight can take between <startSquare> and <endSquare>.`
  )
  .action((startSquare, endSquare) => {
    try {
      validateInput(startSquare, endSquare);
      const knightsTravails = new KnightsTravails();
      const shortestPath = knightsTravails.shortestPath(startSquare, endSquare);
      console.log(shortestPath.join(' '));
    } catch (err) {
      console.log(err.message);
    }
  });

program.parse(process.argv);

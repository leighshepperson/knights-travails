const program = require('commander');
const KnightsTravalis = require('./src/modules/KnightsTravalis');
const ChessSquare = require('./src/modules/ChessSquare');

program.version('1.0.0').description('Knights Travalis');

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
      const knightsTravalis = new KnightsTravalis();
      const shortestPath = knightsTravalis.shortestPath(startSquare, endSquare);
      console.log(shortestPath.join(' '));
    } catch (err) {
      console.log(err.message);
    }
  });

program.parse(process.argv);

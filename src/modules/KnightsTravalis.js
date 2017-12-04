const ChessSquare = require('./ChessSquare');

const getPath = (frontSquare, prevSquareLookup, acc = []) => {
  const prevSquare = prevSquareLookup[frontSquare];
  if (prevSquare === Number.NEGATIVE_INFINITY) {
    return acc;
  }

  acc.push(prevSquare);
  return getPath(prevSquare, prevSquareLookup, acc);
};

class KnightsTravalis {
  nextMoves(squareName) {
    const chessSquare = ChessSquare.parse(squareName);

    const moves = [
      new ChessSquare(chessSquare.x + 1, chessSquare.y + 2),
      new ChessSquare(chessSquare.x - 1, chessSquare.y + 2),
      new ChessSquare(chessSquare.x + 1, chessSquare.y - 2),
      new ChessSquare(chessSquare.x - 1, chessSquare.y - 2),
      new ChessSquare(chessSquare.x + 2, chessSquare.y + 1),
      new ChessSquare(chessSquare.x - 2, chessSquare.y + 1),
      new ChessSquare(chessSquare.x + 2, chessSquare.y - 1),
      new ChessSquare(chessSquare.x - 2, chessSquare.y - 1),
    ];

    return moves
      .filter(nextSquare => nextSquare.isValid())
      .map(nextSquare => nextSquare.toString());
  }

  shortestPath(startSquare, endSquare) {
    const queue = [];
    const prevSquareLookup = {};
    queue.push(startSquare);
    prevSquareLookup[startSquare] = Number.NEGATIVE_INFINITY;

    while (queue.length > 0) {
      const frontSquare = queue.shift();
      if (frontSquare === endSquare) {
        return getPath(frontSquare, prevSquareLookup);
      }

      const nextSquares = this.nextMoves(frontSquare);

      for (const nextSquare of nextSquares) {
        if (prevSquareLookup[nextSquare]) {
          continue;
        }
        queue.push(nextSquare);
        prevSquareLookup[nextSquare] = frontSquare;
      }
    }

    return [];
  }
}

module.exports = KnightsTravalis;

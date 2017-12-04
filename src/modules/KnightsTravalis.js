const ChessSquare = require('./ChessSquare');

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
    return [];
  }
}

module.exports = KnightsTravalis;

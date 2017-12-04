const ChessSquare = require('./ChessSquare');

describe('ChessSquare', () => {
  test(`should get x position`, () => {
    const chessSquare = new ChessSquare(3, 5);
    expect(chessSquare.x).toEqual(3);
  });

  test(`should get y position`, () => {
    const chessSquare = new ChessSquare(3, 5);
    expect(chessSquare.y).toEqual(5);
  });
});

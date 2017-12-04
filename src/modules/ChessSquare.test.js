const ChessSquare = require('./ChessSquare');

describe('ChessSquare', () => {
  test(`should get x position`, () => {
    const chessSquare = new ChessSquare(3);
    expect(chessSquare.x).toEqual(3);
  });
});

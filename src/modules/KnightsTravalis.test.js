const KnightsTravalis = require('./KnightsTravalis');

describe('KnightsTravalis', () => {
  describe('nextMoves', () => {
    const testCases = [
      ['A1', ['B3', 'C2']],
      ['E4', ['F6', 'D6', 'F2', 'D2', 'G5', 'C5', 'G3', 'C3']],
    ];

    testCases.map(([square, nextSquares]) =>
      test(`should return next squares for ${square}`, () => {
        expect(KnightsTravalis.nextMoves(square)).toEqual(nextSquares);
      })
    );
  });
});

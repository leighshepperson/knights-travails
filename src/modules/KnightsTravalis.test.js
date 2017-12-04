const KnightsTravalis = require('./KnightsTravalis');

describe('KnightsTravalis', () => {
  describe('nextMoves', () => {
    const testCases = [
      ['A1', ['B3', 'C2']],
      ['E4', ['F6', 'D6', 'F2', 'D2', 'G5', 'C5', 'G3', 'C3']],
    ];

    testCases.map(([square, nextSquares]) =>
      test(`should return next squares for ${square}`, () => {
        const knightsTravalis = new KnightsTravalis();
        expect(knightsTravalis.nextMoves(square)).toEqual(nextSquares);
      })
    );
  });

  describe('shortestPath', () => {
    test('should return empty array from same square', () => {
      const knightsTravalis = new KnightsTravalis();
      expect(knightsTravalis.shortestPath('A1', 'A1')).toEqual([]);
    });
  });
});

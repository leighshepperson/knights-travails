'use strict';

const KnightsTravalis = require('./KnightsTravalis');

describe('KnightsTravalis', () => {
  describe('nextMoves', () => {
    const testCases = [
      ['A1', ['C2', 'B3']],
      ['E4', ['D2', 'G3', 'C5', 'G5', 'C3', 'F6', 'F2', 'D6']],
    ];

    testCases.map(([square, nextSquares]) =>
      test(`should return next squares for ${square}`, () => {
        const knightsTravalis = new KnightsTravalis();
        expect(knightsTravalis.nextMoves(square)).toEqual(nextSquares);
      })
    );
  });

  describe('shortestPath', () => {
    const testCases = [['A8', 'B7', 4], ['A8', 'H1', 6]];

    testCases.map(([start, end, length]) =>
      test(`the shortest path should have length ${length}`, () => {
        const knightsTravalis = new KnightsTravalis();
        expect(knightsTravalis.shortestPath(start, end).length).toEqual(length);
      })
    );

    test('should return the shortest path between A8 and B7', () => {
      const knightsTravalis = new KnightsTravalis();
      expect(knightsTravalis.shortestPath('A8', 'B7')).toEqual([
        'C7',
        'B5',
        'D6',
        'B7',
      ]);
    });

    test('should return empty array from same square', () => {
      const knightsTravalis = new KnightsTravalis();
      expect(knightsTravalis.shortestPath('A1', 'A1')).toEqual([]);
    });
  });
});

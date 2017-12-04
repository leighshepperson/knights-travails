'use strict';

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

  describe('toString', () => {
    test('it should return string representation of chess square', () => {
      const chessSquare = new ChessSquare(3, 6);
      expect(chessSquare.toString()).toEqual('D7');
    });
  });

  describe('isValid', () => {
    const testCases = [[0, 0], [0, 7], [7, 7], [7, 0], [5, 6]];

    testCases.map(([x, y]) =>
      test(`it should return true if ${x}, ${
        y
      } is inside the chess board`, () => {
        const chessSquare = new ChessSquare(x, y);
        expect(chessSquare.isValid()).toBeTruthy();
      })
    );

    test('it should return false if coords are not inside the chess board', () => {
      const chessSquare = new ChessSquare(-11, 4);

      expect(chessSquare.isValid()).toBeFalsy();
    });
  });

  describe('parse', () => {
    const testCases = [
      {
        input: 'A1',
        x: 0,
        y: 0,
      },
      {
        input: 'H8',
        x: 7,
        y: 7,
      },
      {
        input: 'A8',
        x: 0,
        y: 7,
      },
      {
        input: 'H1',
        x: 7,
        y: 0,
      },
      {
        input: 'E4',
        x: 4,
        y: 3,
      },
    ];

    const badTestCases = ['A0', 'A9', 'A88', 'XX', '!3', 'A-1'];

    testCases.map(({ input, x, y }) =>
      test(`should parse ${input} as ChessSquare with x = ${x} and y = ${
        y
      }`, () => {
        const chessSquare = ChessSquare.parse(input);
        expect(chessSquare.x).toEqual(x);
        expect(chessSquare.y).toEqual(y);
      })
    );

    badTestCases.map(badInput =>
      test('should throw error if invalid input', () => {
        const invalidParse = () => ChessSquare.parse(badInput);

        expect(invalidParse).toThrowError('Only values A1 to H8 are valid!');
      })
    );
  });
});

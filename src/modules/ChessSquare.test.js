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

    testCases.map(({ input, x, y }) =>
      test(`should parse ${input} as ChessSquare with x = ${x} and y = ${
        y
      }`, () => {
        const chessSquare = ChessSquare.parse(input);
        expect(chessSquare.x).toEqual(x);
        expect(chessSquare.y).toEqual(y);
      })
    );

    test('should throw error if invalid input', () => {
      const invalidParse = () => ChessSquare.parse('A9');

      expect(invalidParse).toThrowError('Only values A1 to H8 are valid!');
    });
  });
});

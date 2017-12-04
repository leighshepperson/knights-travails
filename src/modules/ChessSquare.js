class ChessSquare {
  static parse(name) {
    if (!/[A-H][1-8]/.test(name)) {
      throw new Error('Only values A1 to H8 are valid!');
    }

    const [file, rank] = name;

    const x = file.charCodeAt(0) - 65;
    const y = Number.parseInt(rank) - 1;

    return new ChessSquare(x, y);
  }

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

module.exports = ChessSquare;

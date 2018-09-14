class Point {

  static fromIndex(index) {
    return new Point(
      Math.floor(index / Game.x),
      index % Game.x
    );
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toIndex() {
    return y * Game.x + x;
  }

}

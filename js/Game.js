class Game {

  static get x() { return 9; }

  static get y() { return 9; }

  static eachField(func) {
    for (let y = 0; y < Game.y; y++) {
      for (let x = 0; x < Game.x; x++) {
        func(new Point(x, y), y * Game.y + x);
      }
    }
  }

  static validPoint(x, y) {
    return !(x < 0 || y < 0 || x >= Game.x || y >= Game.y);
  }

}

class Field {

  constructor(point) {
    this.point = point;
  }

  style() {
    return {
      width: (Game.width / Game.x) + 'px',
    };
  }

}

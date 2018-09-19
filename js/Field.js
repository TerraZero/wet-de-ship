class Field {

  constructor(point, index) {
    this.point = point;
    this.index = index;
  }

  style() {
    return {
      width: (100 / Game.x) + '%',
      height: (100 / Game.y) + '%',
    };
  }

  mouseenter(data) {
    if (data.action === null) return;
    data.action.hudField(data, this);
  }

}

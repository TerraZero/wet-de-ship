class Hud {

  constructor() {
    this.field = null;
    this.direction = true; // true == x && false == y
  }

  style(data, index) {
    const l = data.action.type.length;
    index -= Math.ceil(l / 2);
    const s = {
      width: 100 / Game.x,
      height: 100 / Game.y,
    };

    let x = this.field.point.x;
    let y = this.field.point.y;

    if (this.direction) {
      x = this.field.point.x + index;
    } else {
      y = this.field.point.y + index;
    }

    s.left = x * s.width;
    s.top = y * s.height;

    return {
      width: s.width + '%',
      height: s.height + '%',
      top: s.top + '%',
      left: s.left + '%',
    };
  }

  isHudField(data, index) {
    const l = data.action.type.length;
    index -= Math.ceil(l / 2);

    let x = this.field.point.x;
    let y = this.field.point.y;

    if (this.direction) {
      x = this.field.point.x + index;
    } else {
      y = this.field.point.y + index;
    }
    return Game.validPoint(x, y);
  }

  mousewheel() {
    this.direction = !this.direction;
  }

}

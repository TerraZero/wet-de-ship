class Action {

  constructor() {

  }

  title() { }

  click(data) {
    data.action = this;
  }

  classes(data) {
    if (data.action === this) {
      return [
        'action--active',
      ];
    }
    return {};
  }

  hudField() {

  }

}

class ShipSelectAction extends Action {

  constructor(type) {
    super();
    this.type = type;
  }

  title() {
    return [
      this.type.name,
      this.type.length,
    ];
  }

  click(data) {
    super.click(data);
  }

  hudField(data, field) {
    data.hud.field = field;
  }

}


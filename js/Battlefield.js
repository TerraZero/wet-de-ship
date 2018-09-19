class Battlefield {

  constructor() {
    this.fields = [];

    Game.eachField((p, i) => {
      this.fields.push(new Field(p, i));
    });
  }

  mouseleave(data) {
    data.hud.field = null;
  }

}

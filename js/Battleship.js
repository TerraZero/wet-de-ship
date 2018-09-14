class Battlefield {

  constructor() {
    this.fields = [];

    Game.eachField((p) => {
      this.fields.push(new Field(p));
    });
  }

  style() {
    return {
      width: (Game.width) + 'px',
    };
  }

}

class ShipType {

  constructor(name) {
    this.name = name;
  }

  click() {

  }

}

class Schlachtschiff extends ShipType {

  constructor() {
    super('Schlachtschiff');
  }

}

class Kreuzer extends ShipType {

  constructor() {
    super('Kreuzer');
  }

}

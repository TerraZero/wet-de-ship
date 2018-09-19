class ShipType {

  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

}

class Schlachtschiff extends ShipType {

  constructor() {
    super('Schlachtschiff', 5);
  }

}

class Kreuzer extends ShipType {

  constructor() {
    super('Kreuzer', 3);
  }

}

class Transporter extends ShipType {

  constructor() {
    super('Transporter', 1);
  }

}

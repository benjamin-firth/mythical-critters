class Pirate {
  constructor(name, job = 'Scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.heinousCounter = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    if (this.heinousCounter < 2) {
      this.cursed = false;
      this.heinousCounter += 1;
    } else {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }
};

module.exports = Pirate;

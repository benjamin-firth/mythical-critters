class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  };

  shoot() {
    if (this.layingDown === true) {
      return 'NO!';
    };
    this.counter++;
    if (this.counter >= 2) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    };
  };

  run() {
    if (this.layingDown === true) {
      return 'NO!';
    };
    this.counter++;
    if (this.counter === 3) {
      this.cranky = true;
    };
    return 'Clop clop clop clop!!!'
  };

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
    } else {
      return 'NO!'
    };
  };

  layDown() {
    this.layingDown = true;
    this.standing = false;
  };

  standUp() {
    this.layingDown = false;
    this.standing = true;
  };

  drinkPotion() {
    if (this.layingDown === false) {
      this.cranky = !this.cranky
    } else {
      return 'Not while I\'m laying down!'
    };
  };

};

module.exports = Centaur;

class Werewolf {
  constructor(name,location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.hasEaten = false;
  }

  eat(victim) {
    if (this.human === false && this.hungry === true) {
      victim.alive = false;
      this.hasEaten = true;
      this.change();
    } else {
      this.hasEaten = false;
    }
  }

  change() {
    if (this.human === true) {
      // console.log('im a wolf')
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      // console.log('im not a wolf')
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    };
  }
};

module.exports = Werewolf;

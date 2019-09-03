class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim){
    if (this.statues.length >= 3) {
      victim.stoned = true;
      this.statues[0].stoned = false;
      this.statues.shift();
      this.statues.push(victim);
    } else {
      this.statues.push(victim);
      victim.stoned = true;
    }
  }
};

module.exports = Medusa;

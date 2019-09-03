class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = true;
    this.isRested = true;
    this.spellCounter = 0;
    if (object.bearded !== undefined) {
      this.bearded = object.bearded
    };
  }
  incantation(phrase) {
    return phrase.toUpperCase();
  }
  cast(spell){
    if (this.spellCounter > 2) {
      this.isRested = false;
    };
    console.log('firing');
    console.log(this.isRested)
    if (this.spellCounter < 2) {
      this.isRested = true;
      this.spellCounter += 1;
      console.log(this.spellCounter)
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    };
  };
};

module.exports = Wizard;

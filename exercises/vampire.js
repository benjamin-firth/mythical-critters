class Vampire {
  constructor (name, pet, thirsty) {
    this.name = name;
    this.pet = pet || 'bat';
//     OR
//     if (pet === undefined) {
//       this.pet = 'bat';
//     } else {
//       this.pet = pet;
//     }
    if (thirsty === undefined) {
      this.thirsty = true;
    }
  }

  drink()  {
    this.thirsty = false;
  }
}



module.exports = Vampire;

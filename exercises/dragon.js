class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.hungryCounter = 0;
  }
  eat() {
    if (this.hungryCounter < 2) {
      this.hungryCounter += 1;
    } else {
      this.hungry = false;
    }
  }
};

module.exports = Dragon;







































// class Dragon {
//   constructor(name, rider, color) {
//     this.name = name;
//     this.rider = rider;
//     this.color = color;
//     this.hungry = true;
//     this.hungryCounter = 0;
//   }
//
//   eat() {
//     if (this.hungryCounter < 2) {
//       this.hungry = true;
//       this.hungryCounter += 1;
//     } else {
//       console.log('firing')
//       this.hungry = false;
//     }
//     console.log(this.hungryCounter);
//   }
// };
//
//
// module.exports = Dragon;

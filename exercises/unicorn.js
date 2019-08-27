class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
//     OR
//     this.color = color || 'white";
    
//     if (color === undefined) {
//       this.color = 'white';
//     } else {
//       this.color = color;
    }
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return (`**;* ${message} *;**`);
  }
}

module.exports = Unicorn;

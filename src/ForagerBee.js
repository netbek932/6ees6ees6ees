class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super()
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    treasureChest.push(treasure);
  }
};

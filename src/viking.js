// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // Armies Attack

  vikingAttack() {
    const saxonRandom =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingRandom =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const index = this.saxonArmy.indexOf(saxonRandom);
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(index, 1);
    }
    return saxonRandom.receiveDamage(vikingRandom.strength);
  }

  saxonAttack() {
    const saxonRandom =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingRandom =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const index2 = this.vikingArmy.indexOf(vikingRandom);
    if (this.vikingArmy.health <= 0) {
      this.vikingArmy.splice(index2, 1);
    }
    return vikingRandom.receiveDamage(saxonRandom.strength);
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

let armyTest = this.saxonArmy.length;
console.log("army test", armyTest);

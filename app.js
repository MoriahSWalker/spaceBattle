// create class to make my ship
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  ussAttack(alien) {
    if (Math.random() < this.accuracy) {
      alien.hull -= this.firepower;
      // console.log(newHull + alien.name);
    }
    // console.log(alien.name + " You've been hit! - 5 hull points")
  }

  alienAttack(myShipObject) {
    if (Math.random() < this.accuracy) {
      myShipObject.hull -= this.firepower;
    }
  }
}

// make instance for "my ship"
let myShip = new Ship("USS HelloWorld", 20, 5, 0.7);
// console.log(myShip)

// functions for random numbers
const randomNumInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomDecimalInRange = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(1));
};
// create class to make alien ships
class AlienShip {
  constructor() {
    this.defeated = false;
    this.alienFleet = [];
  }

  addToFleet(name) {
    let hull = randomNumInRange(3, 6);
    let firepower = randomNumInRange(2, 4);
    let accuracy = randomDecimalInRange(0.6, 0.8);
    this.alienFleet.push(new Ship(name, hull, firepower, accuracy));
  }
}

// create instances
let enemy = new AlienShip();

enemy.addToFleet("Alien Ship 1");
enemy.addToFleet("Alien Ship 2");
enemy.addToFleet("Alien Ship 3");
enemy.addToFleet("Alien Ship 4");
enemy.addToFleet("Alien Ship 5");
enemy.addToFleet("Alien Ship 6");
// console.log(enemy)

// loop through alien ships
const battleAliens = () => {
  let aliens = enemy.alienFleet;
  for (let i = 0; i < aliens.length; i++) {
    // if my ship hull becomes < 1 we will stop the loop and GAMEOVER
    if (myShip.hull <= 0) {
      console.log("GAME OVER");
      enemy.defeated = false;
      break;
    } else if (aliens[i].hull <= 0) {
      console.log("You have been defeated");
    }

    let continueBattle = true;

    // start while loop
    while (continueBattle) {
      // attack aliens
      myShip.ussAttack(aliens[i]);
      // check if alien is defeated
      if (aliens[i].hull <= 0) {
        console.log(`${aliens[i].name} You have been defeated`);
        break;
      }
      aliens[i].alienAttack(myShip);
      // check if I am defeated
      if (myShip.hull <= 0) {
        console.log(myShip.name + " You've been DEFEATED");
        break;
      }
    }
    // end while loop
  }
  // check if aliens are defeated
  if (myShip.hull >= 1) {
    enemy.defeated = true;
    console.log("You have defeated all the ALIENS");
  } else {
    enemy.defeated = false;
    // console.log("You Lose, Game Over");
  }
};
battleAliens();
console.log(enemy.defeated);

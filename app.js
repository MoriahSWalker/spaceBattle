// create class to make my ship
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  ussAttack(alien) {
    // lower alien hitpoint by myShip.firepower
    console.log(alien);
    alien.hull -= myShip.firepower;
    console.log(alien);
  }
}

// make instance for "my ship"
let myShip = new Ship("USS HelloWorld", 20, 5, 0.7);
// console.log(myShip)

// fuctions for random numbers
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
// console.log(enemy.alienFleet[1].name);

const beginBattle = () => {
  for (let i = 0; i < enemy.alienFleet.length; i++) {
    if (myShip.hull < 1) {
      break;
    }

    // we go first
    myShip.ussAttack(enemy.alienFleet[i]);

    // check if enemy hull < 1
  }
};

beginBattle();

// console.log(enemy.alienFleet);

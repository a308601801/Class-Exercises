//here we are?
// call 
// pply 
// bind

class Characters {
    constructor(name, lifePoints, weapon) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.weapon = weapon;
    }

    attack(target) {
        target.getHit();
        changeTurn();
    }
    getHit() {
        this.lifePoints -= 2;
        console.log(this.name + ' remaining life: ' + this.lifePoints);
    }
    displayStats() {
        let stats = `${this.name} <br>Life: ${this.lifePoints}<br>weapon: ${this.weapon}`;
        console.log(stats); 
    }
}

class Player extends Characters {
    constructor(name, lifePoints, occupation) {
        super(name, lifePoints, 'sword');
        this.occupation = occupation;
    }
    pickObject(object) {
        this.weapon = object;
        this.displayStats();
    }
}

class Goblin extends Characters {
    constructor(name, lifePoints, occupation) {
        super(name, lifePoints, 'knife');
        this.occupation = occupation;
    }
    growl() {
        let msg = 'the goblin growling';
        console.log(msg);
    }
    selectAction(target) {
        let rand = Math.floor(Math.random()*2);
        if(rand > 0) {
            this.attack(target);
        } else {
            this.growl();
        }
    }
}

let name = prompt('enter the name of you doom character');
let player = new Player(name, 25, 'knight');
let goblin = new Goblin('Nozguhl', 10);
let turn = 0;

function gameLoop() {
    if(turn === 1) {
        goblin.selectAction(player);
    }
    setTimeout(gameLoop, 3000);
}

gameLoop();

function changeTurn() {
    if(turn === 0) {
        turn = 1;
    } else { 
        turn = 0;
    }
}
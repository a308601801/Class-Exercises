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
        // console.log('Rarrr');
    }
    pickObject() {
        console.log('oh, a flower');
    }
    getHit() {
        this.lifePoints -= 2;
        console.log(this.name + ' remaining life: ' + this.lifePoints);
    }
}

let player = new Characters('ben', 25, 'stick');
let enemy = new Characters('Nozguhl', 10, 'sword');
let target = {
    name: "Arthur",
    health: 100,
    hits: 0,
    items: []
}

let opponent = {
    name: "Frenchman",
    health: 100,
    hits: 0,
    items: []
}

let items = {
    grenade: { name: 'hand grenade', modifier: 10, description: 'Holy hand grenade of Antioch' },
    science: { name: 'witches and velocities', modifier: 2, description: 'Witch identification, airspeed velocity of a swallow, etc' },
    threat: { name: 'threat', modifier: 1, description: 'Threaten to attack' },
    lie: { name: 'misinformation', modifier: 1, description: 'We\'ve already got one!' },
    taunt: { name: 'insult', modifier: 3, description: 'Your mother was a hamster!' },
    cow: { name: 'la vache', modifier: 5, description: 'Catapult cow' }
}

function giveGrenade() {
    target.items.push(items.grenade)
}

function giveScience() {
    target.items.push(items.science)
}

function giveThreat() {
    target.items.push(items.threat)
}

function giveLie() {
    opponent.items.push(items.lie)
}

function giveTaunt() {
    opponent.items.push(items.taunt)
}

function giveCow() {
    opponent.items.push(items.cow)
}

function addModsArthur() {
    let modTotal = 0;
    for (let i = 0; i < target.items.length; i++) {
        modTotal += target.items[i].modifier;
    }
    return modTotal
}

function addModsFrench() {
    let modTotal = 0;
    for (let i = 0; i < opponent.items.length; i++) {
        modTotal += opponent.items[i].modifier;
    }
    return modTotal
}

function update() {
    let healthArthurElem = document.getElementById("healthArthur");
    let hitsArthurElem = document.getElementById("hitsArthur");
    let healthFrenchElem = document.getElementById("healthFrenchman")
    let hitsFrenchElem = document.getElementById("hitsFrenchman");

    healthArthurElem.innerText = target.health;
    hitsArthurElem.innerText = target.hits;
    healthFrenchElem.innerText = opponent.health;
    hitsFrenchElem.innerText = opponent.hits;
}

function slapArthur() {
    target.health -= 1 + addModsFrench();
    target.hits++;
    dead();
    update();
}

function punchArthur() {
    target.health -= 5 + addModsFrench();
    target.hits++;
    dead();
    update();
}

function kickArthur() {
    target.health -= 10 + addModsFrench();
    target.hits++;
    dead();
    update();
}

function slapFrenchman() {
    opponent.health -= 1 + addModsArthur();
    opponent.hits++;
    dead();
    update();
}

function punchFrenchman() {
    opponent.health -= 5 + addModsArthur();
    opponent.hits++;
    dead();
    update();
}

function kickFrenchman() {
    opponent.health -= 10 + addModsArthur();
    opponent.hits++;
    dead();
    update();
}

function dead() {
    if (target.health < 0) {
        target.health = 0;
        let runAwayArthur = new Image;
        runAwayArthur.src = 'runaway-left.gif';
        document.getElementById("runAwayArthur").appendChild(runAwayArthur);
    }
    else if (opponent.health < 0) {
        opponent.health = 0;
        let runAwayFrenchman = new Image;
        runAwayFrenchman.src = 'runaway-right.gif';
        document.getElementById("runAwayFrenchman").appendChild(runAwayFrenchman);
    }
}

function disableButtons() {
    if ((target.health == 0) || (opponent.health == 0)) {
        document.getElementById("test").disabled = true; //this line doesn't work
    }
}
disableButtons();

function reset() {
    target.health = 100;
    target.hits = 0;
    opponent.health = 100;
    opponent.hits = 0;
    // document.getElementById("runAwayArthur").removeChild(runAwayArthur);
    update();
}

update();
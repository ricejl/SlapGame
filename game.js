let target = {
    name: "Frenchman",
    health: 100,
    hits: 0,
    items: []
}

let items = {
    grenade: { name: 'hand grenade', modifier: 10, description: 'Holy hand grenade of Antioch' },
    science: { name: 'witches and velocities', modifier: 3, description: 'Witch identification, airspeed velocity of a swallow, etc' },
    horse: { name: 'Patsy', modifier: 2, description: 'May or may not be a slave hitting coconuts together' },
    lie: { name: 'misinformation', modifier: 2, description: 'We\'ve already got one!' },
    taunt: { name: 'insult', modifier: 4, description: 'Your mother was a hamster!' },
    cow: { name: 'la vache', modifier: 6, description: 'Catapult cow' }
}

function giveGrenade() {
    target.items.push(items.grenade)
}

function giveScience() {
    target.items.push(items.science)
}

function giveHorse() {
    target.items.push(items.horse)
}

function giveLie() {
    target.items.push(items.lie)
}

function giveTaunt() {
    target.items.push(items.taunt)
}

function giveCow() {
    target.items.push(items.cow)
}

function addMods() {
    let modTotal = 0;
    for (let i = 0; i < target.items.length; i++) {
        modTotal += target.items[i].modifier;
    }
    return modTotal
}

function update() {
    let healthElem = document.getElementById("health");
    let hitsElem = document.getElementById("hits");

    healthElem.innerText = target.health;
    hitsElem.innerText = target.hits;
}

function slap() {
    target.health -= 1 + addMods();
    target.hits++;
    dead();
    update();
}

function punch() {
    target.health -= 5 + addMods();
    target.hits++;
    dead();
    update();
}

function kick() {
    target.health -= 10 + addMods();
    target.hits++;
    dead();
    update();
}

function dead() {
    if (target.health < 0) {
        target.health = 0;
        console.log("He's dead.")
    }
}

update();
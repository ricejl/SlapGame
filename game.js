let target = {
    name: "Frenchman",
    health: 100,
    hits: 0,
    items: [lie, taunt, cow]
}

let items = {
    grenade: { name: 'hand grenade', modifier: 10, description: 'Holy hand grenade of Antioch' },
    science: { name: 'witches and velocities', modifier: 3, description: 'Witch identification, airspeed velocity of a swallow, etc' },
    horse: { name: 'Patsy', modifier: 2, description: 'May or may not be a slave hitting coconuts together' },
    lie: { name: 'misinformation', modifier: 2, description: 'We\'ve already got one!' },
    taunt: { name: 'insult', modifier: 4, description: 'Your mother was a hamster!' },
    cow: { name: 'la vache', modifier: 6, description: 'Catapult cow' }
}



function update() {
    let healthElem = document.getElementById("health");
    let hitsElem = document.getElementById("hits");

    healthElem.innerText = target.health;
    hitsElem.innerText = target.hits;
}

function slap() {
    target.health--;
    target.hits++;
    dead();
    update();
}

function punch() {
    target.health -= 5;
    target.hits++;
    dead();
    update();
}

function kick() {
    target.health -= 10;
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

// function hitCount() {
// }

update();
let health = 100;
let name = "Frenchman";
let hits = 0;

function update() {
    let healthElem = document.getElementById("health");
    let hitsElem = document.getElementById("hits");

    healthElem.innerText = health;
    hitsElem.innerText = hits;
}

function slap() {
    health--;
    hits++;
    dead();
    update();
}

function punch() {
    health -= 5;
    hits++;
    dead();
    update();
}

function kick() {
    health -= 10;
    hits++;
    dead();
    update();
}

function dead() {
    if (health < 0) {
        health = 0;
        console.log("He's dead.")
    }
}

// function hitCount() {
// }

update();
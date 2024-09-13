let hunger = 100;
let happiness = 100;
let energy = 100;
const hungerDecreaseInterval = 5000; // Decrease hunger every 5 seconds
const energyDecreaseInterval = 3000; // Decrease energy every 3 seconds

const petImage = document.getElementById('petImage');
const hungerProgress = document.getElementById('hunger');
const happinessProgress = document.getElementById('happiness');
const energyProgress = document.getElementById('energy');
const messageDiv = document.getElementById('message');

function updatePetImage() {
    if (hunger < 30) {
        petImage.src = 'hungry.jpg'; // Replace with your hungry pet image
    } else if (happiness < 30) {
        petImage.src = 'pet-sad.png'; // Replace with your sad pet image
    } else {
        petImage.src = 'pet-happy.jpeg'; // Replace with your happy pet image
    }
}

function updateAttributes() {
    hungerProgress.value = hunger;
    happinessProgress.value = happiness;
    energyProgress.value = energy;

    if (hunger <= 0) {
        messageDiv.textContent = "Your pet is starving!";
    } else if (happiness <= 0) {
        messageDiv.textContent = "Your pet is very sad!";
    } else if (energy <= 0) {
        messageDiv.textContent = "Your pet is too tired!";
    } else {
        messageDiv.textContent = "";
    }

    updatePetImage();
}

function feedPet() {
    hunger = Math.min(100, hunger + 20);
    happiness = Math.min(100, happiness + 10);
    updateAttributes();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 20);
    energy = Math.max(0, energy - 10);
    updateAttributes();
}

function putPetToSleep() {
    energy = Math.min(100, energy + 30);
    hunger = Math.max(0, hunger - 10);
    updateAttributes();
}

document.getElementById('feedButton').addEventListener('click', feedPet);
document.getElementById('playButton').addEventListener('click', playWithPet);
document.getElementById('sleepButton').addEventListener('click', putPetToSleep);

// Decrease attributes over time
setInterval(() => {
    hunger = Math.max(0, hunger - 1);
    energy = Math.max(0, energy - 1);
    updateAttributes();
}, hungerDecreaseInterval);

setInterval(() => {
    energy = Math.max(0, energy - 1);
    updateAttributes();
}, energyDecreaseInterval);

// Initial update
updateAttributes();
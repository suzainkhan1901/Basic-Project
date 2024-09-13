let currentStep = 0;

const storyText = [
    "You find yourself at the entrance of an enchanted forest. Do you wish to enter?",
    "You bravely step into the forest. Suddenly, you see two paths. Do you choose the left path or the right path?",
    "You chose the left path and encounter a friendly fairy! She offers to help you. Do you accept her help?",
    "You chose the right path and find a hidden treasure! Do you take the treasure or leave it?",
    "You accepted the fairy's help and she guides you safely out of the forest. You win!",
    "You took the treasure and became the richest person in the land. You win!",
    "You declined the fairy's help and got lost in the forest. Game Over.",
    "You left the treasure and continued your adventure, but you'll always wonder what could have been. Game Over."
];

document.getElementById("btn-yes").addEventListener("click", () => {
    currentStep = 1;
    updateStory();
});

document.getElementById("btn-no").addEventListener("click", () => {
    currentStep = 6; // Game Over
    updateStory();
});

document.getElementById("btn-restart").addEventListener("click", () => {
    currentStep = 0;
    document.getElementById("btn-restart").style.display = "none";
    updateStory();
});

function updateStory() {
    const storyContent = document.getElementById("story-text");
    const buttons = document.querySelectorAll("button");
    
    // Hide all buttons initially
    buttons.forEach(button => button.style.display = "none");

    // Update story text and show appropriate buttons
    if (currentStep === 0) {
        storyContent.innerText = storyText[currentStep];
        document.getElementById("btn-yes").style.display = "inline";
        document.getElementById("btn-no").style.display = "inline";
    } else if (currentStep === 1) {
        storyContent.innerText = storyText[currentStep];
        document.getElementById("btn-yes").innerText = "Take the left path";
        document.getElementById("btn-no").innerText = "Take the right path";
        document.getElementById("btn-yes").style.display = "inline";
        document.getElementById("btn-no").style.display = "inline";
        document.getElementById("btn-yes").onclick = () => { currentStep = 2; updateStory(); };
        document.getElementById("btn-no").onclick = () => { currentStep = 3; updateStory(); };
    } else if (currentStep === 2) {
        storyContent.innerText = storyText[currentStep];
        document.getElementById("btn-yes").innerText = "Accept her help";
        document.getElementById("btn-no").innerText = "Decline her help";
        document.getElementById("btn-yes").style.display = "inline";
        document.getElementById("btn-no").style.display = "inline";
        document.getElementById("btn-yes").onclick = () => { currentStep = 4; updateStory(); };
        document.getElementById("btn-no").onclick = () => { currentStep = 6; updateStory(); };
    } else if (currentStep === 3) {
        storyContent.innerText = storyText[currentStep];
        document.getElementById("btn-yes").innerText = "Take the treasure";
        document.getElementById("btn-no").innerText = "Leave the treasure";
        document.getElementById("btn-yes").style.display = "inline";
        document.getElementById("btn-no").style.display = "inline";
        document.getElementById("btn-yes").onclick = () => { currentStep = 5; updateStory(); };
        document.getElementById("btn-no").onclick = () => { currentStep = 7; updateStory(); };
    } else {
        storyContent.innerText = storyText[currentStep];
        document.getElementById("btn-restart").style.display = "inline";
    }
}

// Initialize the story
updateStory();
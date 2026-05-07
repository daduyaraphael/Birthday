const heartsContainer = document.getElementById("hearts-container");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");
const gameButtons = document.getElementById("game-buttons");
const playAgainBtn = document.getElementById("play-again");
const nextBtn = document.getElementById("next");

let score = 0;
let heartInterval;

// Move basket with mouse
document.addEventListener("mousemove", (e) => {
    basket.style.left = `${e.clientX - basket.offsetWidth/2}px`;
});

// Create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const size = Math.random() * 20 + 20;
    heart.style.fontSize = `${size}px`;

    // Random horizontal start
    heart.style.left = `${Math.random() * (window.innerWidth - size)}px`;

    // Random sway
    const sway = (Math.random() - 0.5) * 100;
    heart.style.setProperty("--sway", `${sway}px`);

    // Random duration
    const duration = Math.random() * 4 + 4;
    heart.style.animationDuration = `${duration}s`;

    heartsContainer.appendChild(heart);

    // Check for catching
    const checkCatch = setInterval(() => {
        const heartRect = heart.getBoundingClientRect();
        const basketRect = basket.getBoundingClientRect();

        if (
            heartRect.bottom >= basketRect.top &&
            heartRect.left + heartRect.width >= basketRect.left &&
            heartRect.left <= basketRect.right
        ) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            heart.remove();
            clearInterval(checkCatch);
        } else if (heartRect.top > window.innerHeight) {
            heart.remove();
            clearInterval(checkCatch);
        }
    }, 20);
}

// Start game
function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameButtons.style.display = "none";

    heartInterval = setInterval(createHeart, 500);

    // End game after 30 seconds
    setTimeout(() => {
        clearInterval(heartInterval);
        alert(`🎉 Game Over! Your score: ${score}\nThat's how much I care about you 💖`);
        gameButtons.style.display = "block";
    }, 30000);
}

// Buttons actions
playAgainBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    window.location.href = "NextPage.html"; // change to your next page
});

// Start first round
startGame();
// ===== HEARTS =====
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const size = Math.random() * 25 + 15;
    heart.style.fontSize = `${size}px`;

    heart.style.left = `${Math.random() * 100}vw`;

    const sway = (Math.random() - 0.5) * 100;
    heart.style.setProperty("--sway", `${sway}px`);

    const duration = Math.random() * 6 + 4;
    heart.style.animationDuration = `${duration}s`;

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

setInterval(createHeart, 300);


// ===== PHOTO ANIMATION =====
const cards = document.querySelectorAll(".photo-card");

// STEP 1: Scatter randomly
cards.forEach(card => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const rotate = (Math.random() - 0.5) * 40;

    card.style.left = x + "px";
    card.style.top = y + "px";
    card.style.transform = `rotate(${rotate}deg)`;
});

// STEP 2: Align into grid after delay
setTimeout(() => {
    const cols = 4;
    const spacingX = 260;
    const spacingY = 300;

    const startX = (window.innerWidth - (cols * spacingX)) / 2;
    const startY = (window.innerHeight - (2 * spacingY)) / 2;

    cards.forEach((card, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        const x = startX + col * spacingX;
        const y = startY + row * spacingY;

        const rotate = (Math.random() - 0.5) * 10;

        card.style.left = x + "px";
        card.style.top = y + "px";
        card.style.transform = `rotate(${rotate}deg)`;
    });
}, 800); // delay before aligning


// Flip on click
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});
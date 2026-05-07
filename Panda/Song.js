const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random size between 15px and 40px
    const size = Math.random() * 25 + 15;
    heart.style.fontSize = `${size}px`;

    // Random horizontal starting position
    heart.style.left = `${Math.random() * 100}vw`;

    // Random sway distance
    const sway = (Math.random() - 0.5) * 100; // sway -50px to 50px
    heart.style.setProperty("--sway", `${sway}px`);

    // Random animation duration between 4 and 10 seconds
    const duration = Math.random() * 6 + 4;
    heart.style.animationDuration = `${duration}s`;

    // Add to container
    heartsContainer.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Create hearts every 300ms
setInterval(createHeart, 300);
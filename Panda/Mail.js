// HEARTS
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 6 + 4) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
}

setInterval(createHeart, 300);

// NO BUTTON RUN AWAY
const noBtn = document.querySelector(".no");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES → MAIL ANIMATION
const yesBtn = document.querySelector(".yes");
const mailIcon = document.getElementById("mail-icon");
const herImg = document.querySelector(".her");

yesBtn.addEventListener("click", () => {
    const btnRect = yesBtn.getBoundingClientRect();
    const imgRect = herImg.getBoundingClientRect();

    // start at button
    mailIcon.style.top = btnRect.top + "px";
    mailIcon.style.left = btnRect.left + "px";
    mailIcon.style.opacity = "1";

    // move to image center
    setTimeout(() => {
        mailIcon.style.top = (imgRect.top + imgRect.height / 2) + "px";
        mailIcon.style.left = (imgRect.left + imgRect.width / 2) + "px";
        mailIcon.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
});

// CLICK MAIL → OPEN LETTER
const letter = document.getElementById("letter");

mailIcon.addEventListener("click", () => {
    letter.classList.add("show");
});
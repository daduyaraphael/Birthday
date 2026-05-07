// Get button and countdown elements
const button = document.getElementById("specialButton");
const countdown = document.getElementById("countdown");

// Target date: May 10, 2026 12:00 AM
const targetDate = new Date("May 10, 2026 00:00:00");

// Function to update countdown
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        // Time is up, update message
        countdown.textContent = "🎉 You can click the button now! 🎉";
        clearInterval(timer); // Stop the countdown updates
    } else {
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Display countdown
        countdown.textContent = `⏰ ${days}d ${hours}h ${minutes}m ${seconds}s until button unlocks`;
    }
}

// Run countdown every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately on page load

// Click listener — always active
button.addEventListener("click", () => {
    const now = new Date();

    if (now < targetDate) {
        // Early click popup
        alert("⛔ Hala sya excited AHAHAHAHAH mag antay ka! Wait until May 10, 2026 12:00 AM!");
    } else {
        // Redirect to next page safely
        window.location.href = "Message.html"; // Change this if your page name is different
    }
});
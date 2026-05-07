const lantern = document.getElementById("lantern");
const popup = document.getElementById("wishPopup");
const launchBtn = document.getElementById("launchBtn");
const wishText = document.getElementById("wishText");
const fadeScreen = document.getElementById("fadeScreen");
const endingScreen = document.getElementById("endingScreen");

// open popup
lantern.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

// launch lantern
launchBtn.addEventListener("click", () => {
    if (wishText.value.trim() === "") {
        alert("Please write your wish first ✨");
        return;
    }

    // close popup
    popup.classList.add("hidden");

    // lantern animation
    lantern.style.transform = "translateY(-120vh)";

    // fade to black
    setTimeout(() => {
        fadeScreen.style.opacity = "1";
    }, 2000);

    // show ending
    setTimeout(() => {
        endingScreen.classList.remove("hidden");
    }, 4000);
});
// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date("March 15, 2025 20:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "Event Started!";
    }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Lightbox Feature
function openLightbox(src) {
    document.getElementById('lightbox').style.display = "flex";
    document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

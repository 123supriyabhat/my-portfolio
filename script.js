const roles = [
    "Learning Java & DSA",
    "Building My Coding Skills",
    "Aspiring Software Developer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingText.textContent = currentRole.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();
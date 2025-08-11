// Typing Effect
const textArray = ["Web Developer", "Problem Solver", "Creative Coder","Tech Explorer];
let typingText = document.querySelector(".typing-text");
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[arrayIndex].length) {
        typingText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


// ================= WELCOME POPUP =================

const helloBtn = document.getElementById("helloBtn");
const overlay = document.getElementById("overlay");
const bgMusic = document.getElementById("bgMusic");

helloBtn.addEventListener("click", () => {
    overlay.style.display = "none";

    // Background music start
    bgMusic.play().catch(() => {});
});


// ================= TYPEWRITER EFFECT =================

const typingText = document.querySelector(".typing-text");

const text = "I have something special to ask you... ❤️";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

typeWriter();


// ================= IMAGE SLIDER =================

// const slideImage = document.getElementById("slideImage");

// const images = [
//     "images/photo1.jpg",
//     "images/photo2.jpg",
//     "images/photo3.jpg"
// ];

// let currentImage = 0;

// setInterval(() => {

//     currentImage++;

//     if (currentImage >= images.length) {
//         currentImage = 0;
//     }

//     slideImage.src = images[currentImage];

// }, 3000);


// ================= FLOATING HEARTS =================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 300);


// ================= MOVING NO BUTTON =================

const noBtn = document.getElementById("noBtn");

const positions = [

    { left: "230px", top: "50px" },
    { left: "230px", top: "-20px" },
    { left: "230px", top: "100px" },
    { left: "80px", top: "100px" },
    { left: "80px", top: "-20px" },
    { left: "280px", top: "80px" },
    { left: "280px", top: "0px" }

];

let currentPos = 0;

noBtn.addEventListener("mouseover", () => {

    currentPos++;

    if (currentPos >= positions.length) {
        currentPos = 0;
    }

    noBtn.style.left = positions[currentPos].left;
    noBtn.style.top = positions[currentPos].top;

});


// ================= YES BUTTON =================

const yesBtn = document.getElementById("yesBtn");

const message = document.getElementById("message");

const yesPopup = document.getElementById("yesPopup");

yesBtn.addEventListener("click", () => {

    message.innerHTML = `
    
    🥹❤️ Yayyyy Bhawna ❤️<br><br>

    I Love You So Much ❤️✨<br><br>

    Thank You For Coming Into My Life 💖

    `;

    createConfetti();

    yesPopup.style.display = "flex";

});


// ================= CLOSE YES POPUP =================

const closeYesPopup =
    document.getElementById("closeYesPopup");

closeYesPopup.addEventListener("click", () => {

    yesPopup.style.display = "none";

});


// ================= CONFETTI =================

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        let confetti =
            document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.animation =
            "fall 5s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


// ================= ROSE PETALS =================

function createRose() {

    const rose =
        document.createElement("div");

    rose.innerHTML = "🌹";

    rose.style.position = "fixed";

    rose.style.top = "-50px";

    rose.style.left =
        Math.random() * 100 + "%";

    rose.style.fontSize =
        Math.random() * 20 + 20 + "px";

    rose.style.animation =
        "fall 8s linear";

    document.body.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    }, 8000);

}

setInterval(createRose, 1000);


// ================= FALL ANIMATION =================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

from{

transform:translateY(0);

}

to{

transform:translateY(120vh);

}

}

`;

document.head.appendChild(style);
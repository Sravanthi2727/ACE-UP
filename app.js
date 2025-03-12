document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Images/Valorant home.jpg",
        "Images/FS25 home.jpg",
        "Images/COD MW 3 home.jpg",
        "Images/PUBG home.jpg",
        "Images/Gran Turismo 7 home.jpg"
    ];
    const names = [
        "Valorant",
        "FS 25",
        "Call Of Duty Modern Warfare 3",
        "PUBG",
        "Gran Turismo 7"
    ];
    const prices = [
        "Play for Free",
        "Only for Rs. 1000",
        "Only for Rs. 3000",
        "Play for Free",
        "Only for Rs. 4000"
    ];

    let index = 1;
    const gameDisplay = document.getElementById("game-display");
    const pr = gameDisplay.querySelector("p"); // Target the first <p> inside #game-display

    function changeImage() {
        gameDisplay.style.backgroundImage = `url('${images[index]}')`;
        pr.innerHTML = `${names[index]}<br>${prices[index]}`; // Update the content
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000);
});

const filter = document.querySelector("#popup-filter");
const fil_btn = document.querySelector("#filter-btn");
const close_btn = document.querySelector("#filter-submit");

fil_btn.addEventListener("click", function () {
    filter.style.visibility = "visible";
    filter.style.transform = "scale(1)";
});
close_btn.addEventListener("click", function () {
    filter.style.visibility = "hidden";
    filter.style.transform = "scale(0)";
});

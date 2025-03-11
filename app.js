document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/Valorant home.jpg",
        "images/FS25 home.jpg",
        "images/COD MW 3 home.jpg",
        "images/PUBG home.jpg",
        "images/Gran Turismo 7 home.jpg"
    ];

    let index = 1;
    const gameDisplay = document.getElementById("game-display");

    function changeImage() {
        gameDisplay.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000);
});

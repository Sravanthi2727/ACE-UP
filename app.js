document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Images/Valorant home.jpg",
        "Images/FS25 home.jpg",
        "Images/COD MW 3 home.jpg",
        "Images/PUBG home.jpg",
        "Images/Gran Turismo 7 home.jpg"
    ];

    let index = 1;
    const gameDisplay = document.getElementById("game-display");

    function changeImage() {
        gameDisplay.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000);
});

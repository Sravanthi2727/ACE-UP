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
    const gn = gameDisplay.querySelector("#game-na"); // Target the first <p> inside #game-display
    const gp = gameDisplay.querySelector("#game-pr"); // Target the first <p> inside #game-display

    function changeImage() {
        gameDisplay.style.backgroundImage = `url('${images[index]}')`;
        gn.textContent = names[index];
        gp.textContent = prices[index];
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

const login = document.querySelector("#popup-login");
const login_btn = document.querySelector("#profile-btn");
const close_log_btn = document.querySelector("#login-submit");

login_btn.addEventListener("click", function () {
    login.style.visibility = "visible";
    login.style.transform = "scale(1)";
});
close_log_btn.addEventListener("click", function () {
    login.style.visibility = "hidden";
    login.style.transform = "scale(0)";
});

const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#pwd");
let check = false;
function checkForm() {
    if (
        emailInput.value.trim() !== "" &&
        usernameInput.value.trim() !== "" &&
        passwordInput.value.trim().length >= 8
    ) {
        close_log_btn.removeAttribute("disabled");
        close_log_btn.style.opacity = "1";
        check = true;
    } else {
        close_log_btn.setAttribute("disabled", "disabled");
    }
}

emailInput.addEventListener("input", checkForm);
usernameInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);

const profileDivs = document.querySelectorAll(".profile");

close_log_btn.addEventListener("click", () => {

    profileDivs[0].querySelector("h4").textContent = usernameInput.value;
    profileDivs[1].querySelector("span").textContent = "10000";
    profileDivs.forEach(profile => profile.style.visibility = "visible");
    document.querySelector("#login").style.visibility = "hidden";
});

    
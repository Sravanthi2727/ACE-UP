// Main Dispaly slideshow
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
        "Call Of Duty modern Warfare 3",
        "PUBG",
        "Gran Turismo 7"
    ];
    const prices = [
        "Play for Free",
        "Only for Rs. 1000",
        "Only for Rs. 2,999",
        "Play for Free",
        "Only for Rs. 3,999"
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

    setInterval(changeImage, 5000);
});
// Filter Popup

const filter = document.querySelector("#popup-filter");
const fil_btn = document.querySelector("#filter-btn");
const close_btn = document.querySelector("#filter-submit");

// Filter apply

let data = [
    {
        name: "Valorant",
        price: 0,
        genre: ["FPS", "Strategy"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Shooter",
        graphic: "Cartoon",
    },
    {
        name: "FS25",
        price: 999,
        genre: ["Sports", "Strategy"],
        platform: "PC",
        type: "Singleplayer",
        mode: "Story",
        graphic: "Realistic",
    },
    {
        name: "CODMW3",
        price: 2999,
        genre: ["FPS"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Shooter",
        graphic: "Realistic",
    },
    {
        name: "PUBG",
        price: 0,
        genre: ["FPS", "Battle Royale"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Battelroyal",
        graphic: "Realistic",
    },
    {
        name: "GT7",
        price: 3999,
        genre: ["Sports"],
        platform: "Playstation",
        type: "Multiplayer",
        mode: "Story",
        graphic: "Realistic",
    },
    {
        name: "ACV",
        price: 2999,
        genre: ["RPG", "Adventure"],
        platform: "PC",
        type: "Singleplayer",
        mode: "Open World",
        graphic: "Realistic",
    },
    {
        name: "DBD",
        price: 1159,
        genre: ["Horror", "Strategy"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Shooter",
        graphic: "Realistic",
    },
    {
        name: "FC25",
        price: 3999,
        genre: ["Sports"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Story",
        graphic: "Realistic",
    },
    {
        name: "CODW",
        price: 0,
        genre: ["FPS", "Battle Royale"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Battelroyal",
        graphic: "Realistic",
    },
    {
        name: "Fortnite",
        price: 0,
        genre: ["FPS", "Battle Royale"],
        platform: "PC",
        type: "Multiplayer",
        mode: "Battelroyal",
        graphic: "Cartoon",
    },
    {
        name: "WTA",
        price: 1099,
        genre: ["Horror", "Adventure"],
        platform: "PC",
        type: "Singleplayer",
        mode: "Story",
        graphic: "Realistic",
    },
    {
        name: "Hitman2",
        price: 2509,
        genre: ["Strategy", "Adventure"],
        platform: "PC",
        type: "Singleplayer",
        mode: "Story",
        graphic: "Realistic",
    },
    {
        name: "ER",
        price: 5299,
        genre: ["RPG", "Adventure"],
        platform: "PC",
        type: "Singleplayer",
        mode: "Story",
        graphic: "Realistic",
    }
]


function filter_apply(data) {
    const genre = document.querySelector("#genre");
    const platform = document.querySelector("#platform");
    const type = document.querySelectorAll(".type");
    const mode = document.querySelector("#mode");
    const graphic = document.querySelector("#graphic");

    let games = {
        "Valorant": document.querySelector("#Valorant"),
        "FS25": document.querySelector("#FS25"),
        "CODMW3": document.querySelector("#CODMW3"),
        "PUBG": document.querySelector("#PUBG"),
        "GT7": document.querySelector("#GT7"),
        'ACV': document.querySelector("#ACV"),
        "DBD": document.querySelector("#DBD"),
        "FC25": document.querySelector("#FC25"),
        "CODW": document.querySelector("#CODW"),
        "Fortnite": document.querySelector("#Fortnite"),
        "WTA": document.querySelector("#WTA"),
        "Hitman2": document.querySelector("#Hitman2"),
        "ER": document.querySelector("#ER")
    }
    document.querySelector("#block1").style.display = "none";
    let genre_val = genre.value;
    let platform_val = platform.value;
    let type_val1 = "";
    type.forEach((t) => {
        if (t.checked) {
            type_val1 = t.value; // Store the selected value
        }
    });
    let mode_val = mode.value;
    let graphic_val = graphic.value;
    let price_val = price.value;
    data.forEach((data) => {
        if (data.genre.includes(genre_val) &&
            data.platform === platform_val &&
            data.type === type_val1 &&
            data.mode === mode_val &&
            data.graphic === graphic_val &&
            data.price <= price_val) {
            games[data.name].style.display = "flex";
        }
        else {
            games[data.name].style.display = "none";
        }

    });

}

fil_btn.addEventListener("click", function () {
    filter.style.visibility = "visible";
    filter.style.transform = "scale(1)";
});
close_btn.addEventListener("click", function () {
    filter.style.visibility = "hidden";
    filter.style.transform = "scale(0)";
    filter_apply(data);
});
//Prize range slider
let value = document.getElementById("live-value");
const price = document.getElementById("price");
value.innerHTML = price.value;
price.addEventListener("input", function () {
    value.innerHTML = price.value;
});

// Login Popup

const login = document.querySelector("#popup-login");
const login_btn = document.querySelector("#profile-btn");
const close_log_btn = document.querySelector("#login-submit");

login_btn.addEventListener("click", function () {
    login.style.visibility = "visible";
    login.style.transform = "scale(1)";
});

// Prevent form submission
const loginForm = document.querySelector("#popup-login form");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    login.style.visibility = "hidden";
    login.style.transform = "scale(0)";
});
// can't allow to submit form if the input fields are empty
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

// Close login popup and display the user's name and balance
const profileDivs = document.querySelectorAll(".profile");

close_log_btn.addEventListener("click", () => {
    profileDivs[0].querySelector("h4").textContent = usernameInput.value;
    profileDivs[1].querySelector("span").textContent = "10000";
    profileDivs.forEach(profile => profile.style.display = "flex");
    document.querySelector("#login").style.display = "none";
});









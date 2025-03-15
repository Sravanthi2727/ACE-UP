
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

// Prevent form submission
const loginForm = document.querySelector("#popup-login form");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
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


//removing the cart item
const removeBtns = document.querySelectorAll(".remove-btn");
removeBtns.forEach(btn => {
    btn.addEventListener("click", () => { 
        const gameBox = btn.closest(".game-box");
        if (gameBox) gameBox.style.display = "none";
    });
});


//removing and reducing the G-Cash amount after purchasing

const buyBtns = document.querySelectorAll(".buy-btn");
buyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const gameBox = btn.closest(".game-box");
        if (gameBox) {
            let ruppes = gameBox.querySelectorAll(".price")[0].textContent;
            ruppes=ruppes.replace("₹"," ").trim();
            ruppes=ruppes.replace(",","").trim();
            if (ruppes=="Free") ruppes=0;
            else ruppes=parseInt(ruppes);
            if(check){
                let gcash = parseInt(profileDivs[1].querySelector("span").textContent);
                gcash -= ruppes;
                profileDivs[1].querySelector("span").textContent = gcash;
                let chu = true;
                if (gcash<0){
                    chu = false;
                    alert("Insufficient G-Cash");
                    gcash += ruppes;
                    profileDivs[1].querySelector("span").textContent = gcash;
                }
                if(chu){
                    gameBox.style.display = "none";
                }
            }
            else{
                alert("Please login first");
                login.style.visibility = "visible";
                login.style.transform = "scale(1)";
            }
        }
    });
});
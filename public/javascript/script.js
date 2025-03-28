// Main Dispaly slideshow
document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "images/Valorant home.jpg",
      "images/FS25 home.jpg",
      "images/COD MW 3 home.jpg",
      "images/PUBG home.jpg",
      "images/Gran Turismo 7 home.jpg",
    ];
    const names = [
      "Valorant",
      "FS 25",
      "Call Of Duty modern Warfare 3",
      "PUBG",
      "Gran Turismo 7",
    ];
    const prices = [
      "Play for Free",
      "Only for Rs. 1000",
      "Only for Rs. 2,999",
      "Play for Free",
      "Only for Rs. 3,999",
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
  
  
  
  // signup Popup
  
  const login = document.querySelector("#popup-signup");
  const login_btn = document.querySelector("#profile-btn");
  const close_log_btn = document.querySelector("#login-submit");
  const box = document.querySelectorAll(".login-box");
  
  login_btn.addEventListener("click", function () {
    login.style.visibility = "visible";
    box[0].style.transform = "scale(1)";
  });

  const loginForm = document.querySelector("#popup-signup form");
  loginForm.addEventListener("submit", function (event) {
    login.style.visibility = "hidden";
    box[0].style.transform = "scale(0)";
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
  

// login popup
const loginclick = document.querySelector(".login-box a");
const sign = document.querySelector("#popup-login");
loginclick.addEventListener("click",()=>{
  login.style.visibility = "hidden";
    box[0].style.transform = "scale(0)";
  sign.style.visibility = "visible";
  box[1].style.transform = "scale(1)";
})

const emaillInput = document.querySelector("#emaill");
const passworddInput = document.querySelector("#pwdd");
const closee_log_btn = document.querySelector("#login-submiit")
function checkkForm() {
  if (
    emaillInput.value.trim() !== "" &&
    passworddInput.value.trim().length >= 8
  ) {
    closee_log_btn.removeAttribute("disabled");
    closee_log_btn.style.opacity = "1";
  } else {
    closee_log_btn.setAttribute("disabled", "disabled");
  }
}


emaillInput.addEventListener("input", checkkForm);
passworddInput.addEventListener("input", checkkForm)
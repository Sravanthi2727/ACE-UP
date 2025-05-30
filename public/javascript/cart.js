let user;

// Fetch user data
const fetchUser = async () => {
    try {
        const response = await fetch("/cart", { method: "PUT" });
        user = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call fetchUser to load data
fetchUser();


// sending array to backend to remove game from cart
const modify_cart = async (cart) => {
    console.log("Ima in cart")
    try {
        const response = await fetch("/cart", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ carted: cart })
        });
        const data = await response.json();
        if (data.redirect) {
            // Now redirect the browser
            window.location.href = data.redirect;
        }

    } catch (error) {
        console.error("Error:", error);
    }
};

//sending array to backend to add to vault
const modify_vault = async (id) => {
    try {
        const response = await fetch("/gvault", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gid: id })
        });

        const data = await response.json();

        if (data.success) {
            alert("Game added to vault!");
            // Optionally, update the UI to reflect the new state
        } else {
            alert("Failed to add game to vault.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error adding game to vault.");
    }
}


const modify_gcash = async(cash)=>{
    try {
        const response = await fetch("/gcash", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gcash: cash })
        });
    } catch (error) {
        console.error("Error:", error);
    }
}


document.addEventListener("click", (event) => {
    // to remove from cart // to buy game from cart
    if (event.target.classList.contains("remove-btn") || event.target.classList.contains("buy-btn")) {
        const gid = event.target.getAttribute("data-id");
        let price = event.target.getAttribute("price");
        if (user && user.carted) {
            user.carted = user.carted.filter(item => item._id.toString() !== gid);
            try {
                if (event.target.classList.contains("buy-btn")) {
                    if (price === "₹ Free") {
                        price = 0;
                    } else {
                        price = price.replace(/₹|,/g, "")
                        price = parseInt(price)
                    }
                    if (user.gcash >= price) {
                        user.gcash-=price;
                        modify_gcash(user.gcash);
                        modify_vault(gid);
                        modify_cart(user.carted);
                        alert("Game Purchased, check your vault");
                    } else {
                        alert("Not enough money");
                    }
                } else if(event.target.classList.contains("remove-btn")) {
                    modify_cart(user.carted)
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            console.error("User data not loaded yet or carted is undefined!");
        }
    }
});

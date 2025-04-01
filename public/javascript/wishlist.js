let userr;

// Fetch user data
const fetchUserr = async () => {
    try {
        const response = await fetch("http://localhost:3000/cart", { method: "PUT" });
        userr = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call fetchUser to load data
fetchUserr();

// sending array to backend to remove game from wishlist
const modify_wishlist = async (wish) => {
    try {
        const response = await fetch("http://localhost:3000/wishlist", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wishlisted: wish })
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


// sending game id to backend to add it in cart
const modify_cartt = async (cart) => {
    try {
        const response = await fetch("http://localhost:3000/cart", {
            method: "POST",
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


document.addEventListener("click", (event) => {
    // to remove from wishlist // to add game to cart
    if (event.target.classList.contains("remove-btnn") || event.target.classList.contains("cart-btn")) {
        let gid = event.target.getAttribute("game-id");
        if (userr && userr.wishlisted) {
            userr.wishlisted = userr.wishlisted.filter(item => item._id.toString() !== gid);
            try {
                if (event.target.classList.contains("cart-btn")) {
                    modify_wishlist(userr.wishlisted);
                    let ccheck =1;
                    userr.carted.forEach(cart => {
                        if(cart._id.toString()===gid){
                            ccheck = 0;
                        }
                    });
                    console.log(ccheck);
                    if(ccheck){
                        //  modify_cartt(gid);
                    }
                } else if(event.target.classList.contains("remove-btnn")) {
                    modify_wishlist(userr.wishlisted)
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            console.error("User data not loaded yet or carted is undefined!");
        }
    }
});


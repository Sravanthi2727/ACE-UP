let user;

// Fetch user data
const fetchUser = async () => {
    try {
        const response = await fetch("http://localhost:3000/cart", { method: "PUT" });
        user = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call fetchUser to load data
fetchUser();


// sending array to backend
const modify_cart = async (cart) => {
    try {
        const response = await fetch("http://localhost:3000/cart", {
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



document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        console.log("Remove button clicked!");

        const gid = event.target.getAttribute("data-id");

        if (user && user.carted) {
            user.carted = user.carted.filter(item => item._id.toString() !== gid);
            console.log(user.carted)
            console.log(gid)
            try {
                modify_cart(user.carted)
            } catch (error) {
                console.error(error)
            }
        } else {
            console.error("User data not loaded yet or carted is undefined!");
        }
    }
});

const main_pur = document.querySelectorAll(".game_purchase");
const main_cart = document.querySelectorAll(".game_cart");
const main_wish = document.querySelectorAll(".game_wishlist");


main_pur.forEach(pur => {
    pur.addEventListener("click", () => {
        const gid = pur.getAttribute("data-id");
        let price = pur.getAttribute("price");
        if (user) {
            if (price === "₹ Free") {
                price = 0;
            } else {
                price = price.replace(/₹|,/g, "")
                price = parseInt(price)
            }
            if (user.gcash >= price) {
                user.gcash -= price;
                modify_gcash(user.gcash);
                modify_vault(gid);
                pur.innerHTML = `<i class="fa-solid fa-shop"></i>Purchased`
                pur.disabled = "true"
                location.reload();
                alert("Game Purchased, check your vault");
            } else {
                alert("Not enough money");
            }
        }

    })
});

main_cart.forEach(cart => {
    cart.addEventListener("click", () => {
        const gid = cart.getAttribute("data-id");
        console.log(user);
        if (user) {
            user.carted.push(gid);
            modify_cart(user.carted);
            cart.innerHTML = `<i class="fa-solid fa-cart-plus"></i>Carted`
            cart.disabled = "true"
            alert("Game added to cart")
        }

    })
});

main_wish.forEach(wish => {
    wish.addEventListener("click", () => {
        const gid = wish.getAttribute("data-id");
        console.log(user);
        if (user) {
            user.wishlisted.push(gid);
            modify_wishlistt(user.wishlisted);
            wish.innerHTML = `<i class="fa-solid fa-list"></i>Wishlisted`
            wish.disabled = "true"
            alert("Game added to wishlist")
        }

    })
});
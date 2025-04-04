const mongoose = require("mongoose")
const express = require("express");
const route = express.Router();
const gdata = require("../model/gamedata");
const udata = require("../model/userdata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const default_user = async () => {
    return await udata.findOne({ email: "deafault" })
        .populate("carted")
        .populate("vaulted")
        .populate("wishlisted");
}
const default_user_cart = async (cart) => {
    return await udata.updateOne({ email: "deafault" },
        { $set: { carted: cart } }
    )
}

const default_user_cart_id = async (cart) => {
    return await udata.updateOne({ email: "deafault" },
        { $push: { carted: cart } }
    )
}

const default_user_wishlist = async (wish) => {
    return await udata.updateOne({ email: "deafault" },
        { $set: { wishlisted: wish } }
    )
}

const default_user_gcash = async (cash) => {
    return await udata.updateOne({ email: "deafault" },
        { $set: { gcash: cash } }
    )
}

const default_user_vault = async (gid) => {
    return await udata.updateOne({ email: "deafault" },
        { $push: { vaulted: gid } }
    )
}


//login middelware:
const login = async (req, res, next) => {
    try {
        if (!req.cookies.token || req.cookies.token === "") {
            req.user = await default_user();
        } else {
            const token = req.cookies.token;
            const decoded = jwt.verify(token, "secretkey");
            req.user = await udata.findOne({ email: decoded.email })
                .populate("carted")
                .populate("vaulted")
                .populate("wishlisted");
        }
    } catch (error) {
        console.error("Authentication Error:", error);
        req.user = await default_user();
    }
    next();
};

// Our Home Route
route.get("/", login, async (req, res) => {
    const game = await gdata.find();
    res.render("index", { gdata: game, user: req.user });
})

//Our signup or Account Creation route
route.post("/signup", async (req, res) => {
    try {
        let { email, username, password } = req.body;
        // checking that user already exist or not
        const check = await udata.findOne({ email });
        if (check) {
            res.redirect("/");
        } else {
            // providing more sequrity to it's password!
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const user = await udata.create({ username, email, password: hash, gcash: 1000 });

            // by providing cookies we are making him log in!
            let token = jwt.sign({ email }, "secretkey");
            res.cookie("token", token)
            res.redirect("/");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
})


//Our login route
route.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        // checking that user already exist or not
        const check = await udata.findOne({ email });
        if (check) {
            bcrypt.compare(req.body.password, check.password, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error verifying password");
                }
                if (result) {
                    let token = jwt.sign({ email }, "secretkey");
                    res.cookie("token", token)
                } else {
                    return res.status(500).send("Error verifying password");
                }
                res.redirect("/")
            })

        } else {
            res.redirect("/");

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
})


//Our Cart Page Route
route.get("/cart", login, async (req, res) => {
    res.render("cart", { user: req.user });
})

route.put("/cart", login, async (req, res) => {
    res.json(req.user);
})
// route to add item in cart via game id
route.post("/cart", login, async (req, res) => {
    if (req.user.email === "deafault") {
        let cart = req.body.carted;
        default_user_cart_id(cart);
    } else {
        let cart = req.body.carted;
        await req.user.updateOne(
            { $push: { carted: cart } }
        );

    }
    res.json({ redirect: "/wishlist" });
})
// route to remove item from cart
route.delete("/cart", login, async (req, res) => {
    if (req.user.email === "deafault") {
        let cart = req.body.carted;
        default_user_cart(cart);
    } else {
        let cart = req.body.carted;
        await req.user.updateOne(
            { $set: { carted: cart } }
        );

    }
    res.json({ redirect: "/cart" });
})


//gvault page route
route.get("/gvault", login, async (req, res) => {
    res.render("gvault", { user: req.user });
})
// route to update the value of gcash
route.put("/gvault", login, async (req, res) => {
    if (req.user.email === "deafault") {
        let gid = req.body.gid;
        gid = new mongoose.Types.ObjectId(gid);
        default_user_vault(gid);
    } else {
        let gid = req.body.gid;
        gid = new mongoose.Types.ObjectId(gid);
        await req.user.updateOne(
            { $push: { vaulted: gid } }
        );

    }
})

//route for wishlist
route.get("/wishlist", login, async (req, res) => {
    res.render("wishlist", { user: req.user });
})
//route to remove game from wishlist
route.delete("/wishlist", login, async (req, res) => {
    if (req.user.email === "deafault") {
        let wish = req.body.wishlisted;
        default_user_wishlist(wish);
    } else {
        let wish = req.body.wishlisted;
        await req.user.updateOne(
            { $set: { wishlisted: wish } }
        );

    }
    res.json({ redirect: "/wishlist" });
})


//route for cutting gcash
route.put("/gcash", login, async (req, res) => {
    if (req.user.email === "deafault") {
        let cash = req.body.gcash;
        default_user_gcash(cash);
    } else {
        let cash = req.body.gcash;
        await req.user.updateOne(
            { $set: { gcash: cash } }
        );

    }
})

//helpline page route;
route.get("/helpline", login, async (req, res) => {
    res.render("helpline", { user: req.user });
})

//top_pics rendering
route.get("/top_picks", login, async (req, res) => {
    try {
        res.render(`top_picks`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})
//trending_games Rendering
route.get("/trending_games", login, async (req, res) => {
    try {
        res.render(`trending_games`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})

//new_release rendering
route.get("/new_release", login, async (req, res) => {
    try {
        res.render(`new_release`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})

//account page rendering
route.get("/account", login, async (req, res) => {
    try {
        res.render(`account`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})


//payment issue page rendering
route.get("/payment_issue", login, async (req, res) => {
    try {
        res.render(`payment`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})


//tech support page rendering
route.get("/tech_supp", login, async (req, res) => {
    try {
        res.render(`tech_supp`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})


//contact page renderint
route.get("/contact", login, async (req, res) => {
    try {
        res.render(`contact`, { user: req.user });
    } catch (error) {
        console.error("EJS Rendering Error:", error);
        res.status(500).send("Error rendering page");
    }
})


//download issue rendering

//game issue renderint

module.exports = route     
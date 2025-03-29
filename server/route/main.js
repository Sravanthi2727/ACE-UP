
const express = require("express");
const route = express.Router();
const gdata = require("../model/gamedata");
const udata = require("../model/userdata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const default_user = async () => {
    return await udata.findOne({ email: "deafault" }).populate("carted");
}
const default_user_cart = async (cart) => {
    return await udata.updateOne({ email: "deafault" },
        { $set: { carted: cart } }
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
            req.user = await udata.findOne({ email: decoded.email }).populate("carted");
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
            console.log("exist");
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
            console.log("something is wrong")
            res.redirect("/");

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
})


//Our Cart Page Route
route.get("/cart", login, async (req, res) => {
    const game = await gdata.find();
    res.render("cart", { gdata: game, user: req.user });
})

route.put("/cart", login, async (req, res) => {
    res.json(req.user)
})


route.delete("/cart", async (req, res) => {
    if (req.cookies.token == "" || Object.keys(req.cookies).length === 0) {
        let cart = req.body.carted;
        default_user_cart(cart);
    } else {
        let cart = req.body.carted;
        const token = req.cookies.token;
        const temp = jwt.verify(token, "secretkey");
        await udata.updateOne(
            { email: temp.email },
            { $set: { carted: cart } }
        );

    }
    res.redirect("/");
})

module.exports = route
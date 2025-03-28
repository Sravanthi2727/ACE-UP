
const express = require("express");
const route = express.Router();
const gdata = require("../model/gamedata");
const udata = require("../model/userdata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const default_user = async () => {
    return await udata.findOne({ email: "deafault" });
}

// Our Home Route
route.get("/", async (req, res) => {
    const game = await gdata.find();
    if (req.cookies.token == "" || Object.keys(req.cookies).length === 0) {
        let def_user = await default_user()
        res.render("index", { gdata: game, user: def_user });
    } else {;
        const token = req.cookies.token;
        const temp = jwt.verify(token, "secretkey");
        let def_user = await udata.findOne({ email: temp.email });
        res.render("index", { gdata: game, user: def_user });
    }
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
            console.log("hello");
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
            console.log("exist");
            bcrypt.compare(req.body.password, check.password, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error verifying password");
                }
                if (result) {
                    let token = jwt.sign({ email }, "secretkey");
                    res.cookie("token", token)
                    console.log("hello");
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
route.get("/cart", async (req, res) => {
    const game = await gdata.find();
    if (req.cookies.token == "" || Object.keys(req.cookies).length === 0) {
        let def_user = await default_user()
        res.render("cart", { gdata: game, user: def_user });
    } else {
        const token = req.cookies.token;
        const temp = jwt.verify(token, "secretkey");
        let def_user = await udata.findOne({ email: temp.email });
        def_user = await udata.findOne({ email: temp.email }).populate("carted");
        res.render("cart", { gdata: game, user: def_user });
    }
})


module.exports = route
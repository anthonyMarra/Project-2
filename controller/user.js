const User = require("../models/user")

function create(req, res) {
    const user = new User(req.body)
    user.save(function (err) {
        if (err) {
            return res.render("users", { title: "User Page" })
        } else {
            return res.redirect(`users/${user._id}`, { title: "User Page" })
        }
    })
}

function index(req, res) {
    User.find({}, function (err, users) {
        res.render("users/index", { users })
    })

}

module.exports = { create, index }
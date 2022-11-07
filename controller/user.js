const User = require("../models/user")

function create(req, res) {
    const user = new User(req.body)
    user.save(function (err) {
        if (err) {
            return res.render("users/new")
        } else {
            return res.redirect(`users/${user._id}`)
        }
    })
}

function index(req, res) {
    User.find({}, function (err, users) {
        res.render("users/index", { users })
    })

}

module.exports = { create, index }
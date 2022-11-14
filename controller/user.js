const { models } = require("mongoose")
const { receiveMessageOnPort } = require("worker_threads")
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

function update(req, res) {
    console.log(req.body)
    const id = req.params.id
    Contract.findOne({
        "_id": req.params.id,
        "user": req.user.id
    })
    const updatedWishlist = {
        wishList: wishList.push(req.body.wishList)
    }
    models.Post.updateOne(updatedWishlist, { where: { id: id } })

    res.redirect("/")
}
module.exports = { create, index, update }
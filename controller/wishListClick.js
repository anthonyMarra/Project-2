const User = require("../models/user")

const wishListButton = document.querySelectorAll('.wishList')
wishListButton.forEach(function (wish) {
    wish.addEventListener('click', wishList)
})

console.log(User)

function wishList(element) {
    const contractId = element.target.className.slice(9)
    console.log(contractId)
    User.wishList.update(contractId)
    res.redirect("/")
}
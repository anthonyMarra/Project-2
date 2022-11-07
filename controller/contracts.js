const Contract = require("../models/contract")

function create(req, res) {
    const contract = new contract(req.body)
    contract.save(function (err) {
        if (err) {
            return res.render("contracts/new")
        } else {
            return res.redirect(`contracts/${contract._id}`)
        }
    })
}

module.exports = { create }
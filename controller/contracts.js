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
function index(req, res) {
    Contract.find({}, function (err, contracts) {
        res.render("contracts/index", { contracts })
    })

}

module.exports = { create, index }
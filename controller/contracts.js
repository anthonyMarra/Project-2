const Contract = require("../models/contract")

function create(req, res) {
    req.body.user = req.user
    const contract = new Contract(req.body)

    contract.save(function (err) {
        if (err) {
            return res.render("contracts/new", { title: "Creating New Contract" })
        } else {
            return res.redirect("contracts")
            //`contracts/${contract._id}`
        }
    })
}
function index(req, res) {
    Contract.find().populate("user").then(function (populated) {
        console.log(populated)
        res.render("contracts/index", { contracts: populated, title: "Browse Contracts" })
    }).catch(function (err) {
        console.log(err)
    })
}
function newContract(req, res) {
    res.render("contracts/new", { title: "Add Contract" })
}

function show(req, res) {

}

module.exports = {
    create,
    index,
    new: newContract,
    show
}
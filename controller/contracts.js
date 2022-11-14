const { receiveMessageOnPort } = require("worker_threads")
const Contract = require("../models/contract")



function index(req, res) {
    Contract.find().populate("user").then(function (populated) {
        res.render("contracts/index", { contracts: populated, title: "Browse Contracts" })
    }).catch(function (err) {
        console.log(err)
    })
}
function newContract(req, res) {
    res.render("contracts/new", { title: "Add Contract" })
}

function deleteContract(req, res, next) {
    Contract.findOne({
        "_id": req.params.id,
        "user": req.user.id
    })
        .then(function (contract) {
            if (!contract) {
                return res.redirect("/contracts")
            }
            contract.remove(req.params.id)
        })
        .then(function (contract) {
            if (!contract) {
                res.redirect("/contracts")
            }
        })
        .catch(function (err) {
            return next(err)
        })
}

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

// function update(req, res) {
//     // Contract.findOne({
//     //     "_id": req.params.id,
//     //     "user": req.user.id
//     //     // .update
//     // })
//     const id = req.params.id
//     const updatedContract = {

//     }

// }

module.exports = {
    create,
    index,
    new: newContract,
    // update,
    delete: deleteContract
}
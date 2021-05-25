const MemberController = require("../controllers/member")
const express = require("express")
const router = express.Router()

//get all members
router.get('/', (req,res) => {
    MemberController.getMembers(req.body).then(resultFromGetMembers => res.send(resultFromGetMembers))
})


//get one member
router.get('/:id', (req,res) => {
    MemberController.getMember(req.params).then(resultFromGetMember => res.send(resultFromGetMember))
})

//add a new member
router.post('/add', (req,res) => {
    MemberController.addMember(req.body).then(resultFromAddMember => res.send(resultFromAddMember))
})


//edit member
router.put('/edit/:id', (req,res) => {
    console.log(req.params)
    MemberController.editMember(req.params, req.body).then(resultFromEditMember => res.send(resultFromEditMember))
})

//delete member
router.delete('/delete/:id', (req,res) => {

    console.log(req.params)

    MemberController.deleteMember(req.params).then(resultFromDeleteMember => res.send(resultFromDeleteMember))
})



module.exports = router
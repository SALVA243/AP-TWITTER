const express = require("express")
const router = express.Router();
const AllRequette = require("../../Controllers/UsersControllers/UsersReadControllers.js");

router.get(('/'), (req, res) => {
    console.log('users Afficher')
    AllRequette.getAllUsers().then(users => res.send(users))
});

router.get(('/:id([0-9])'), (req, res) => {
    console.log('un user est Affiché')
    AllRequette.getUser(+req.params.id).then(user => res.send(user))
});


module.exports = router;
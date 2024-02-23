const express = require("express")
const router = express.Router();
const addUser = require("../../Controllers/UsersControllers/UsersCreationControllers");


router.post(('/'), (req, res) => {
    console.log('Utilisateur créé')
    addUser(req.body).then(users => res.send(users))
});


module.exports = router;
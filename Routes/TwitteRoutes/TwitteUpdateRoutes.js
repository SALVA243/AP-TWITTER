const express = require("express")
const router = express.Router();
const updateUsers = require("../../Controllers/UsersControllers/UsersUpdateControllers");

router.patch(('/'), (req, res) => {
    console.log('utilisateur modifié')
    updateUsers(req.body).then(user => res.send(user))
});


module.exports = router;
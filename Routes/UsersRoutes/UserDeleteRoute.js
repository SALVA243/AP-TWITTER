const express = require("express")
const router = express.Router();

const deleteUser = require("../../Controllers/UsersControllers/UsersDeleteControllers");

router.delete(('/:id([0-9])'), (req, res) => {
    console.log('suppression Uitlisateur')
    deleteUser(+req.params.id).then(user => res.send(user))
});

module.exports = router;
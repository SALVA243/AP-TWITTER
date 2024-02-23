const express = require("express")
const router = express.Router();
const AllTwitte = require("../../Controllers/TwitteControllers/TwitteReadControllers");

router.get(('/'), (req, res) => {
    console.log('users Afficher')
    AllRequette.getAllTwitte().then(users => res.send(users))
});

router.get(('/:id([0-9])'), (req, res) => {
    console.log('un user est Affiché')
    AllRequette.getTwitte(+req.params.id).then(user => res.send(user))
});


module.exports = router;
const express = require("express")
const router = express.Router();

const deletePost = require("../../Controllers/TwitteControllers/TwitteDeleteControllers");

router.delete(('/:id([0-9])'), (req, res) => {
    console.log('suppression Uitlisateur')
    deletePost(+req.params.id).then(user => res.send(user))
});

module.exports = router;
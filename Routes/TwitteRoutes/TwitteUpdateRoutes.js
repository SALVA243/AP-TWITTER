const express = require("express")
const router = express.Router();
const updatePost = require("../../Controllers/TwitteControllers/TwitteUpdateControllers");

router.patch(('/'), (req, res) => {
    console.log('utilisateur modifié')
    updatePost(req.body).then(user => res.send(user))
});


module.exports = router;
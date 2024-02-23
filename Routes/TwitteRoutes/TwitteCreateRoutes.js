const express = require("express")
const router = express.Router();
const addPost = require("../../Controllers/TwitteControllers/TwitteCreateControllers");


router.post(('/'), (req, res) => {
    console.log('Post créé')
    addPost(req.body).then(users => res.send(users))
});


module.exports = router;
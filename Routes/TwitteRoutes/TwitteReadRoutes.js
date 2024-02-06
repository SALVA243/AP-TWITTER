const express = require("express")
const router = express.Router();

router.get(('/'), (req, res) => {
    res.json(console.log("Voici les Twittes"));
});

module.exports = router;
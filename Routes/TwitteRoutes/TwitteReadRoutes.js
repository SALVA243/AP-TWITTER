const express = require("express")
const router = express.Router();

router.get(('/'), (req, res) => {
    res.json(console.log("Affichage des Twittes"));
});

module.exports = router;
const express = require("express")
const router = express.Router();

router.post(('/'), (req, res) => {
    res.json(console.log("Ajouter un Twitte"));
});

module.exports = router;
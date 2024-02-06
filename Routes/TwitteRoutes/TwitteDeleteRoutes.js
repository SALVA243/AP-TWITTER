const express = require("express")
const router = express.Router();

router.delete(('/'), (req, res) => {
    res.json(console.log("Supprimer un Twitte"));
});

module.exports = router;
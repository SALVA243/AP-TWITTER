const express = require("express")
const router = express.Router();

router.put(('/:id'), (req, res) => {
    res.json({ message: req.params.id });
});

module.exports = router;
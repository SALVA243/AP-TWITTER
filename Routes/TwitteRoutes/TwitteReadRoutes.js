const express = require("express")
const router = express.Router();

router.get(('/'), (req, res) => {
    res.json(console.log("Affichage des Twittes"));
});

router.patch(('/like-post/:id'), (req, res) => {
    res.json({ message: "Post Liké : id:" + req.params.id });
});

router.patch(('/dislike-post/:id'), (req, res) => {
    res.json({ message: "Post disLiké : id:" + req.params.id });
});

module.exports = router;

/*--------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------*/

// const client = require('../../Config/db');
// const SelectSql = `SELECT * FROM eleve`;


// client
//     .query(InsertSql)
//     .then((response) => {
//         console.log("Success");
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// //     res.json({ message: req.body.message });

// // });


// module.exports = router;
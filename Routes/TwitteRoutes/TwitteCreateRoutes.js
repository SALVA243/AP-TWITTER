const express = require("express");
const router = express.Router();

const client = require('../../Config/db');


router.post(('/'), (req, res) => {

    const username = req.body['username'];
    const password = req.body['password'];

    console.log("Username :" + username);
    console.log("PassWord :" + password);

    const InsertSql = `INSERT INTO eleve(num,noms)  VALUES ('${username}', '${password}')`;

    client
        .query(InsertSql)
        .then((response) => {
            console.log("Success");
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })

    res.json({ message: req.body.message });

});


module.exports = router;
const express = require("express")
const router = express.Router();
// const { getAllUser, getUser } = require("../../Controllers/UsersControllers/UsersReadControllers.js");
const AllRequette = require("../../Controllers/UsersControllers/UsersReadControllers.js");


router.get(('/'), (req, res) => {
    console.log('users Afficher')
    AllRequette.getAllUsers().then(users => res.send(users))
});

router.get(('/:id([0-9])'), (req, res) => {
    console.log('un user est Affiché')
    AllRequette.getUser(+req.params.id).then(user => res.send(user))
});

 
/*recuperer l'utilisateur l'email*/
/*router.get(('/:email'), (req, res) => {
    console.log('un user est Affiché')
    AllRequette.getUserByemail(req.params.email).then(user => res.send(user))
});*/

/*recuperer l'utilisateur par mot passe*/
/*router.get(('/:motpasse'), (req, res) => {
    console.log('un user est Affiché')
    AllRequette.getUserByMotpasse(req.params.motpasse).then(user => res.send(user))
});*/

// router.patch(('/like-post/:id'), (req, res) => {
//     res.json({ message: "Post Liké : id:" + req.params.id });
// });

// router.patch(('/dislike-post/:id'), (req, res) => {
//     res.json({ message: "Post disLiké : id:" + req.params.id });
// });

module.exports = router;
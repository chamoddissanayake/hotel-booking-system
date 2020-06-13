const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/').post((req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const address = req.body.address;
    const gender = req.body.gender;
    const password = req.body.password;


    const newUser = new User({
        username: username,
        email: email,
        address: address,
        gender: gender,
        password: password
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/validateUser').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username: username,
        password: password
    })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
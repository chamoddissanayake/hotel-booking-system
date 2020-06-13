const router = require('express').Router();
let Hotel = require('../models/hotel.model');



//get hotels by location
router.route('/').get((req, res) => {
    let query = {}
    if (req.query.location) {
        query.location = req.query.location;
    }
    Hotel.find(query)
        .then(hotels => res.json(hotels))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get a hotel by objectId
router.route('/:oid').get((req, res) => {
    var ObjectId = require('mongodb').ObjectID;
    Hotel.find(ObjectId(req.params.oid))
        .then(hotel => res.json(hotel))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
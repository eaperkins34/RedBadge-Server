const router = require('express').Router();
const Business = require('../db').import('../models/business');

/*****CREATE NEW BUSINESS****/
router.post('/create', (req, res) => {
   
    Business.create({
        name: req.body.business.name,
        location: req.body.business.location,
        phone: req.body.business.phone,
        hours: req.body.business.hours,
        price: req.body.business.price,
        number_of_rooms: req.body.business.number_of_rooms,
        url: req.body.business.url,
        themes: req.body.business.themes,
        image: req.body.business.image
    })
    .then(function(newBusiness) {
        res.send(newBusiness);
    },
    function(err) {
        console.log(err);
    })
});

module.exports = router;
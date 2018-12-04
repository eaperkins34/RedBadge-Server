const router = require('express').Router();
const Business = require('../db').import('../models/business');

/*****CREATE NEW BUSINESS****/
router.post('/create', (req, res) => {
    // let name = req.body.business.name;
    // let location = req.body.business.location;
    // let phone = req.body.business.phone;
    // let hours = req.body.business.hours;
    // let price = req.body.business.price;
    // let number_of_rooms = req.body.business.number_of_rooms;
    // let url = req.body.business.url;
    // let themes = req.body.business.themes;

    Business.create({
        name: req.body.business.name,
        location: req.body.business.location,
        phone: req.body.business.phone,
        hours: req.body.business.hours,
        price: req.body.business.price,
        number_of_rooms: req.body.business.number_of_rooms,
        url: req.body.business.url,
        themes: req.body.business.themes,
    })
    .then(function(newBusiness) {
        res.send(newBusiness);
    },
    function(err) {
        console.log(err);
    })
});

module.exports = router;
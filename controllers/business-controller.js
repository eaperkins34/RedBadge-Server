const router = require('express').Router();
const Business = require('../db').import('../models/business');
const Theme = require('../db').import('../models/theme')

Theme.belongsTo(Business);

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

/******GET ALL BUSINESSES******/
router.get('/all', (req, res) => {
    Business.findAll()
        .then(business => res.status(200).json(business))
        .catch(error => res.status(500).json(error))
})

router.get('/:id', (req, res, next) => {
    Business.findById(req.params.id)
        .then(res.send.bind(res))
        .catch(next);
})

/*****UPDATE BUSINESS******/
router.put('/update/:id', (req, res) => {
    if(!req.errors) {
        Business.update({
            name: req.body.business.name,
            location: req.body.business.location,
            phone: req.body.business.phone,
            hours: req.body.business.hours,
            price: req.body.business.price,
            number_of_rooms: req.body.business.number_of_rooms,
            url: req.body.business.url,
            themes: req.body.business.themes,
            image: req.body.business.image},
            { where: {id: req.params.id }})

            .then(business => res.status(200).json(business))
            .catch(err => res.status(500).json(req.errors))
    }
})

module.exports = router;
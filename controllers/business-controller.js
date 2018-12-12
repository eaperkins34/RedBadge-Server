const router = require('express').Router();
const Business = require('../db').import('../models/business');
const Theme = require('../db').import('../models/theme')

Business.hasMany(Theme, {as: 'roomTheme'})

/*****CREATE NEW BUSINESS****/
router.post('/create', (req, res) => {   
    Business.create(req.body)
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

router.get('/:businessId/themes', async(req, res) => {
    Business.findOne({where:{id: req.params.businessId}})
        .then(business => {
            business.getThemes()})
            .then(res.send)
        .catch(error => res.status(500).json(error))
})

/*****UPDATE BUSINESS******/
router.put('/update/:id', (req, res) => {
    if(!req.errors) {
        Business.update((req.body),
            { where: {id: req.params.id }})
            .then(business => res.status(200).json(business))
            .catch(err => res.status(500).json(req.errors))
    }
})

module.exports = router;
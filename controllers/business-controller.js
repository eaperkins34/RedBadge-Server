const router = require('express').Router();
const Business = require('../db').import('../models/business');
const Theme = require('../db').import('../models/theme')
const Review = require('../db').import('../models/review')

Business.hasMany(Theme, {as: 'roomTheme'})
Business.hasMany(Review, {as: 'businessReview'})

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
    Business.findAll({include: [{all:true}]})
        .then(business => res.status(200).json(business))
        .catch(error => res.status(500).json(error))
})

router.get('/:id', (req, res, next) => {
    Business.findById((req.params.id), {include: [{all:true}]})
        .then(res.send.bind(res))
        .catch(next);
})

router.get('/:businessId/themes', async(req, res) => {
    Business.findOne({where:{id: req.params.businessId}, include: [{all:true}]})
        .then(business => res.status(200).json(business))
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

router.delete('/delete/:id',(req, res) => {
    Business.destroy({ where: { id: req.params.id }})
        .then( business => res.status(200).json(business))
        .catch( err => res.json(req.errors))
})
module.exports = router;
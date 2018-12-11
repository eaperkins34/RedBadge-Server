const router = require('express').Router();
const Business = require('../db').import('../models/business');
const Theme = require('../db').import('../models/theme')

Business.hasMany(Theme, {as: 'Themes'})

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

router.get('/:businessId/themes', (req, res) => {
    Business.findOne({where:{id: req.params.businessId}})
    // console.log(business)
    // return(business).then(business => business.getThemes())
    //     // .then(res.send(business.getTheme()))
    //     .catch(error => res.status(500).json(error))
        .then(results => {
            results.getThemes()})
            .then(() => {
                return (res.send(results.getThemes()))
            })
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
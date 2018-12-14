const router = require('express').Router();
const Review = require('../db').import('../models/review');
const User = require('../db').import('../models/user');
const validateUserSession = require('../middleware/validateUserSession')

Review.belongsTo(User)

/*** CREATE NEW REVIEW ***/
router.post('/create', validateUserSession, (req, res) => {
    Review.create(req.body)
    .then(function(newReview) {
        res.send(newReview);
    },
    function(err) {
        console.log(err);
    })
})

/*** UPDATE REVIEW  ***/
router.put('/update/:id', validateUserSession, (req, res) => {
    Review.update(req.body, { where: {id: req.params.id }})
        .then(review => res.status(200).json(review))
        .catch(errors => res.status(500).json(req.errors))
})

/*** DELETE REVIEW ***/
router.delete('/delete/:id', validateUserSession, (req, res) => {
    Review.destroy({ where: {id: req.params.id }})
        .then(review => res.status(200).json(review))
        .catch(error => res.json(req.errors))
})

module.exports = router;
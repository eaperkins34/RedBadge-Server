const router = require('express').Router();
const Theme = require('../db').import('../models/theme');

/****CREATE NEW THEME*****/
router.post('/create', (req,res) => {
    Theme.create({
        name: req.body.theme.name,
        business: req.body.theme.business,
        description: req.body.theme.description,
        minimum: req.body.theme.minimum,
        maximum: req.body.theme.maximum,
        length: req.body.theme.length,
        difficulty: req.body.theme.difficulty
    })
    .then(function(newTheme) {
        res.send(newTheme);
    },
    function(err) {
        console.log(err);
    })
})

module.exports = router;


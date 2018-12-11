const router = require('express').Router();
const Theme = require('../db').import('../models/theme');

/****CREATE NEW THEME*****/
router.post('/create', (req,res) => {
    Theme.create(req.body)
    .then(function(newTheme) {
        res.send(newTheme);
    },
    function(err) {
        console.log(err);
    })
})

/****UPDATE THEME****/
router.put('/update/:id', (req, res) => {
    Theme.update(req.body, { where: { id: req.params.id }})

        .then(theme => res.status(200).json(theme))
        .catch(err => res.status(500).json(req.errors))
      
})

/****DELETE THEM****/
router.delete('/delete/:id', (req, res) => {
    Theme.destroy({ where: { id: req.params.id }})
        .then(theme => res.status(200).json(theme))
        .catch(err => res.json(req.errors))
})

router.get('/all', (req, res) => {
    Theme.findAll({include: [{all: true}]})
    .then(theme => res.status(200).json(theme))
    .catch(error => res.status(500).json(theme))
})

module.exports = router;
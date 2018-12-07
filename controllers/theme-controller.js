const router = require('express').Router();
 const Theme = require('../db').import('../models/theme');
 
 /****CREATE NEW THEME*****/
router.post('/create', (req,res) => {
    Theme.create({
        name: req.body.theme.name,
        business: req.business.name,
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
 /****UPDATE THEME****/
router.put('/update/:id', (req, res) => {
    Theme.update({
        name: req.body.theme.name,
        business: req.business.name,
        description: req.body.theme.description,
        minimum: req.body.theme.minimum,
        maximum: req.body.theme.maximum,
        length: req.body.theme.length,
        difficulty: req.body.theme.difficulty},
        { where: { id: req.params.id }})
         .then(theme => res.status(200).json(theme))
        .catch(err => res.status(500).json(req.errors))
      
})
 /****DELETE THEM****/
router.delete('/delete/:id', (req, res) => {
    Theme.destroy({ where: { id: req.params.id }})
        .then(theme => res.status(200).json(theme))
        .catch(err => res.json(req.errors))
})
 module.exports = router;

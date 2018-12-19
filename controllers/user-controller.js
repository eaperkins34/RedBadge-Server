var router = require('express').Router();
var Sequelize = require('../db');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var validateAdminSession = require('../middleware/validateAdminSession')
var Review = require('../db').import('../models/review')
var User = Sequelize.import('../models/user.js');

User.hasMany(Review, {as: 'businessReview'})

/******CREATE USER*******/

router.post('/create', (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24 })

            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError => err => res.status(500).send(err)
    )
})

router.post('/login', (req, res, next) => {
    User.findOne({ where: {username: req.body.username}})
        .then(user => {
            if(user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    console.log('the value matches:', matches)
                    if (matches) {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: 'successfully logged in',
                            sessionToken: token
                        })
                    } else {
                    res.status(502).json({message: "Auth failed"})
                    }
                })            
            } else {
                res.status(500).send({error: "failed to authenticate"})
            }
        })
        .catch(error => res.status(501).json(error))
        })


/******UPDATE USER*******/
router.put('/update/:id', validateAdminSession, (req, res) => {
    if(!req.errors) {
        User.update(req.body,
            { where: { id: req.params.id }})

            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json(req.errors))
    }
})

router.get('/all', (req, res) => {
    User.findAll()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(error))
})

router.get('/:id', (req, res, next) => {
    User.findById((req.params.id), {include: [{all:true}]})
        .then(res.send.bind(res))
        .catch(next);
})

router.delete('/delete/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id }})
        .then(theme => res.status(200).json(theme))
        .catch(err => res.json(req.errors))
})



module.exports = router;
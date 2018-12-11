module.exports = app => {
    app.use('/business', require('./business-controller'))
    app.use('/theme', require('./theme-controller'))

    app.use('*/*', (req, res) => {
        res.send({msg: '4oh4'})
    })
}
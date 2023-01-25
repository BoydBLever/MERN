const Player = require('../controllers/controller')

module.exports = (app) => {
    app.get('/api/players', Player.findAll)
    app.post('/api/players', Player.create)
    app.get('/api/players/:id', Player.findOne)
    app.put('/api/players/:id', Player.update)
    app.delete('/api/players/:id', Player.delete)
}


const jwtPassport = require('passport')
const {Strategy:JwtStrategy, ExtractJwt} = require('passport-jwt')

const {playerUser} = require('../models')

const options = {
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'chapter7'
}

jwtPassport.use(
    new JwtStrategy(options, async(payload, done) => {
        playerUser.findByPk(payload.id)
        .then(user => done(null, user))
        .catch(err => (err, false))
    })
)

module.exports = jwtPassport
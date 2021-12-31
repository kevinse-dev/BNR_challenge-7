const jwtPassport = require('../lib/jwtPassport')

module.exports = jwtPassport.authenticate('jwt', {
    session:false
})
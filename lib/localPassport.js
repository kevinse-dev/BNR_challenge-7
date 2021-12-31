const localPassport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const {superAdmin} = require('../models')

const authenticate = async(username, password, done) =>{
    try {
        const admin = await superAdmin.authenticate({username, password})
        return done(null, admin)
    } catch (error) {
        return done(null, false, {message: error.message})
    }
}
localPassport.use(
    new LocalStrategy({usernameField:'username', passwordField: 'password'}, authenticate)
)

localPassport.serializeUser(
    (admin, done) => done(null, admin.id)
)

localPassport.deserializeUser(
    async(id, done) => done(null, await superAdmin.findByPk(id))
)


module.exports = localPassport
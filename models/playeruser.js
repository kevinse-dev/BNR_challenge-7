'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class playerUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({username, password}) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({username, password: encryptedPassword})
    }

    checkPassword = password => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      const payload = {
        id:this.id,
        username:this.ussername,
      }

      const secretKey = 'chapter7'
      const token = jwt.sign(payload, secretKey)
      
      return token
    }

    // login

    static authenticate = async({username, password}) => {
      try {
        const user = await this.findOne({where: {username}})
        if(!user) return Promise.reject('User Not Found!')
        const isPasswordValid = user.checkPassword(password)
        if(!isPasswordValid) return Promise.reject('Password Wrong!')
        return Promise.resolve(user)
      } catch (error) {
        return Promise.reject(error)
      }
    }


  };
  playerUser.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    author: DataTypes.STRING,
    score: DataTypes.INTEGER,
    diamond: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playerUser',
  });
  return playerUser;
};
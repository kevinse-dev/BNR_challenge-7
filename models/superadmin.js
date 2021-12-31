'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')


module.exports = (sequelize, DataTypes) => {
  class superAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // method untuk register

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({username, password}) => {
      const encryptPassword = this.#encrypt(password)
      return this.create({username, password:encryptPassword})
    }

    // method untuk login
    checkPassword = password => bcrypt.compareSync(password, this.password)


    static authenticate = async({username, password}) => {
      try {
        const admin = await this.findOne({where: {username}})
        if(!admin) return Promise.reject('username salah!')
        const isPasswordValid = admin.checkPassword(password)
        if(!isPasswordValid) return Promise.reject('password salah!')
        return Promise.resolve(admin)
      } catch (error) {
        return Promise.reject(error)
      }
    }


  };
  superAdmin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'superAdmin',
  });
  return superAdmin;
};
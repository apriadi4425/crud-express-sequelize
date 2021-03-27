const models = require('../models')
const jwt = require("jsonwebtoken")
const md5 = require('md5')

const accessTokenSecret = process.env.SECRET_KEY;

exports.Signup = (req, res) => {
    const { username, email, password, name } = req.body
    models.User.create({username, email, name, password : md5(password)})
        .then(result => {
          res.send({
            message : 'sukses',
            data : result
          })
        }).catch(err => {
            res.send({
                message : 'error',
                data : err
            })
        })
}

exports.SingIn = async (req, res) => {
  const { username, password } = req.body
  const User = await models.User.findOne({
      where : {
          username : username,
          password : md5(password)
      }
  })
  if(User !== null){
      const DataUser = User.dataValues;
      const accessToken = jwt.sign({ username: DataUser.username }, accessTokenSecret);
      res.status(200).send({
          status : 200,
          data : {
              username : DataUser.username,
              nama : DataUser.nama,
              token : accessToken
          }
      })
  }else{
      res.status(401).send({
          status : 401,
          data : {
              message : 'Username atau password salah'
          }
      })
  }

}
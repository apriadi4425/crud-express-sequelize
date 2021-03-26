const models = require('../models')
const md5 = require('md5')

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
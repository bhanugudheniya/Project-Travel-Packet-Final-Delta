var mongoose = require('mongoose');
var jwt=require('jsonwebtoken')
var adminRegistration = mongoose.Schema({
    
    Name:String,
    Phone:String,
    Email:String,
    Password:{ type: String, required: true},
    ConfirmPassword:String,

});
adminRegistration.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }


module.exports= mongoose.model('adminRegistration',adminRegistration);
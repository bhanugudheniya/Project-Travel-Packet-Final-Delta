var express = require('express');
var router = express.Router();
var User = require('../model/TravelPacketSchema');
var userRegistration = require('../model/userRegistration')
var adminRegistration = require('../model/adminRegistration')
const app = express();
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});

// ADD Data
router.post('/addData', (req, res)=>{
  // FROM
  const fromName = req.body.fromName
  const fromHouseNumber = req.body.fromHouseNumber
  const fromArea = req.body.fromArea
  const fromStreet = req.body.fromStreet
  const fromPinCode = req.body.fromPinCode
  const fromEmail = req.body.fromEmail
  const fromPhoneNumber = req.body.fromPhoneNumber

  // TO
  const toName = req.body.toName
  const toHouseNumber = req.body.toHouseNumber
  const toArea = req.body.toArea
  const toStreet = req.body.toStreet
  const toPinCode = req.body.toPinCode
  const toEmail = req.body.toEmail
  const toPhoneNumber = req.body.toPhoneNumber

  // ITEM DESCRIPTION
  const itemName = req.body.itemName
  const itemSize = req.body.itemSize
  const itemShape = req.body.itemShape
  const itemWeight = req.body.itemWeight

  new User({
    // FROM
    fromName : fromName,
    fromHouseNumber : fromHouseNumber,
    fromArea : fromArea,
    fromStreet : fromStreet,
    fromPinCode : fromPinCode,
    fromEmail : fromEmail,
    fromPhoneNumber : fromPhoneNumber,

    // TO
    toName : toName,
    toHouseNumber : toHouseNumber,
    toArea : toArea,
    toStreet : toStreet,
    toPinCode : toPinCode,
    toEmail : toEmail,
    toPhoneNumber : toPhoneNumber,

    // ITEM DESCRIPTION
    itemName : itemName,
    itemSize : itemSize,
    itemShape : itemShape,
    itemWeight : itemWeight
  }).save(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      console.log(data)
      res.json(data)
    }
  })
})

// GET DATA
router.get('/getData', function(req,res){
  User.find(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      res.json(data)
    }
  })
})

//////////////////////////////// User Registration /////////////////////////////////////////////
/////////////////////////////////Registration
router.post("/addUserRegistration", (req, res) => {
  console.log(req.body.firstName);

  userRegistration.findOne({ Email: req.body.Email }, (err, callbackData) => {
    if (err) console.log(err);
    else {
      if (callbackData) {
        res.json({ message: "Already Registered" });
      } else {
        if (req.body.Password == req.body.ConfirmPassword) {
          var salt = bcrypt.genSaltSync(10);
          const hashing = bcrypt.hashSync(req.body.Password, salt);

          new userRegistration({
            Name: req.body.Name,
            Phone: req.body.Phone,
            Email: req.body.Email,
            Password: hashing,
            ConfirmPassword: req.body.ConfirmPassword,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Zip: req.body.Zip

          }).save((err, callback) => {
            if (err) console.log(err);
            else res.json({ message: "registered" });
          });
        } else {
          res.json({ message: "Password doesn't matched" });
        }
      }
    }
  });
}
);

////////////////////// USER LOGIN ///////////////////////////////

router.post('/login', (req, res) => {
  let regObj = {
    Email: req.body.Email,
    Password: req.body.Password
  }
  userRegistration.findOne({
    Email: regObj.Email
  },
    (err, cb) => {
      if (err) {
        res.json({ "message": err });
      }
      else {
        if (cb == null) {
          res.json({ "message": "Check Your Credentials" });
        }
        else {
          bcrypt.compare(regObj.Password, cb.Password, function (err, callbackData) {
            if (err) {
              // handle error
              console.log(err);
            }
            if (callbackData) {
              // Send JWT
              cb['token'] = cb.generateJwt();
              // console.log(cb.token);
              // console.log(data)
              // res.json(data);
              let responseObj = {
                token: cb.token
              };
              console.log(responseObj);
              res.json(responseObj);
            }
            else {
              // response is OutgoingMessage object that server response http request
              res.json({ message: 'passwords do not match', success: false });
            }
          });
        }
      }

    })

  console.log(regObj);
})

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// Admin Section  ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// Admin Registration /////////////////////////////////////////////
/////////////////////////////////Registration
router.post("/addAdminRegistration", (req, res) => {
  console.log(req.body.firstName);

  adminRegistration.findOne({ Email: req.body.Email }, (err, callbackData) => {
    if (err) console.log(err);
    else {
      if (callbackData) {
        res.json({ message: "Already Registered" });
      } else {
        if (req.body.Password == req.body.ConfirmPassword) {
          var salt = bcrypt.genSaltSync(10);
          const hashing = bcrypt.hashSync(req.body.Password, salt);

          new adminRegistration({
            Name: req.body.Name,
            Phone: req.body.Phone,
            Email: req.body.Email,
            Password: hashing,
            ConfirmPassword: req.body.ConfirmPassword,
            
          }).save((err, callback) => {
            if (err) console.log(err);
            else res.json({ message: "registered" });
          });
        } else {
          res.json({ message: "Password doesn't matched" });
        }
      }
    }
  });
}
);

////////////////////// ADMIN LOGIN ///////////////////////////////

router.post('/adminlogin', (req, res) => {
  let regObj = {
    Email: req.body.Email,
    Password: req.body.Password
  }
  adminRegistration.findOne({
    Email: regObj.Email
  },
    (err, cb) => {
      if (err) {
        res.json({ "message": err });
      }
      else {
        if (cb == null) {
          res.json({ "message": "Check Your Credentials" });
        }
        else {
          bcrypt.compare(regObj.Password, cb.Password, function (err, callbackData) {
            if (err) {
              // handle error
              console.log(err);
            }
            if (callbackData) {
              // Send JWT
              cb['token'] = cb.generateJwt();
              // console.log(cb.token);
              // console.log(data)
              // res.json(data);
              let responseObj = {
                token: cb.token
              };
              console.log(responseObj);
              res.json(responseObj);
            }
            else {
              // response is OutgoingMessage object that server response http request
              res.json({ message: 'passwords do not match', success: false });
            }
          });
        }
      }

    })

  console.log(regObj);
})


module.exports = router;

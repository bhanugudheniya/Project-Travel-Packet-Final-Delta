var mongoose = require('mongoose');

var user = mongoose.Schema({
   // FROM
   fromName : String,
   fromHouseNumber : String,
   fromArea : String,
   fromStreet : String,
   fromPinCode : String,
   fromEmail : String,
   fromPhoneNumber : String,

   // TO
   toName : String,
   toHouseNumber : String,
   toArea : String,
   toStreet : String,
   toPinCode : String,
   toEmail : String,
   toPhoneNumber : String,

   // ITEM DESCRIPTION
   itemName : String,
   itemSize : String,
   itemShape : String,
   itemWeight :String,
});

module.exports = mongoose.model('User', user)
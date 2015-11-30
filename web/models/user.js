var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: String,
	email: {type: String, required : true, index: {unique: true, dropDups: true} },
	token: {type: String, index: {unique: true, sparse: true} },
	name: String,
	location: String,
	created_at: Date,
  	updated_at: Date
});

// on every save, add the date
userSchema.pre('save', function(next) {
  var currentDate = new Date();  
  this.updated_at = currentDate;
  if (!this.created_at) this.created_at = currentDate;
  next();
});

var User = mongoose.model('User', userSchema);

//METHODS 
//...

module.exports = mongoose.model('User', userSchema);
	


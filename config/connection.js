var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });

//db config -- REPLACE DB_USERNAME/DB_PASSWORD/DATABASE_NAME WITH YOUR OWN FROM MLAB!
var mongoDB = 'mongodb://wendu:7777Wen@ds127063.mlab.com:27063/goodnews';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

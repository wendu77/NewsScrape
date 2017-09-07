var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });

//db config -- REPLACE DB_USERNAME/DB_PASSWORD/DATABASE_NAME WITH YOUR OWN FROM MLAB!
mongoose.connect(process.env.DB_URL, function(err, res){
  if (err){
    console.log('DB CONNECTION FAILED: '+err)
  }
  else {
    console.log('DB CONNECTION SUCCEEDED')
  }
})
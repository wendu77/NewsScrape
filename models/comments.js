// requiring mongoose
var mongoose = require("mongoose");

// database schema for comments
var commentsSchema = new mongoose.Schema({
	articleId: {
		type: String
	},
	name: {
		type: String
	},
	comment: {
		type: String
	},
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
var fs = require("fs");
var DEFAULT_EMOJI = "😀";
var DEFAULT_NUMBER = 10;

var argumentHandler = function(){
	if(process.argv.length == 4){
		DEFAULT_NUMBER = process.argv[2];
		DEFAULT_EMOJI = process.argv[3];
	}
	generateEmoji();
} 

var clearFile = function(){
	console.log("Deleting data from file...");
	fs.writeFile("./output","",(e)=>{
		if(e){
			console.log("Error while making empty");
			throw e;
		};
	});
	console.log("File Empty, Ready to add Emoji");
};

var addEmojiToFile = function(){
	fs.appendFile("./output",DEFAULT_EMOJI,(err)=>{
		if(err) {
			console.log("Error");
			throw err;
		};
	});
};

var generateEmoji = function(){
	clearFile();
	for (var i = 0; i < DEFAULT_NUMBER; i++) {
		addEmojiToFile();
	};
	console.log(DEFAULT_NUMBER+" <- Emoji Added of "+ DEFAULT_EMOJI);
};

argumentHandler();
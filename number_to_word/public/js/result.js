var convert_to_words = function(){
	var number = $("#number").val();
  	$.post('/convert', {number:number}, function(res) {
  	 	$("#words").text("Result is : "+res.words.toString());
  	}, 'json');
};

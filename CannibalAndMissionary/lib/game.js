var Game = function(){
	var self = this;
	var INITIAL_MAN_IN_RIGHT = 3;
	var INITIAL_GHOST_IN_RIGHT = 3;
	var INITIAL_MAN_IN_LEFT = 0;
	var INITIAL_GHOST_IN_LEFT = 0;
	
	var CURRENT_MAN_IN_RIGHT;
	var CURRENT_GHOST_IN_RIGHT;
	var CURRENT_MAN_IN_LEFT;
	var CURRENT_GHOST_IN_LEFT;
	

	this.name = new Date().getTime();
	this.startGame = function(){
		console.log("hello")
		CURRENT_GHOST_IN_RIGHT = INITIAL_GHOST_IN_RIGHT;
		CURRENT_MAN_IN_RIGHT = INITIAL_MAN_IN_RIGHT;
		CURRENT_GHOST_IN_LEFT = INITIAL_GHOST_IN_LEFT;
		CURRENT_MAN_IN_LEFT = INITIAL_MAN_IN_LEFT;
		console.log(CURRENT_GHOST_IN_RIGHT,CURRENT_MAN_IN_RIGHT,CURRENT_GHOST_IN_LEFT,CURRENT_MAN_IN_LEFT,"++++++++++++++++")
	}
	this.getStatus = function(gameID){
		var result = {manRight:3,
					  manLeft:CURRENT_MAN_IN_LEFT,
					  ghostRight:CURRENT_GHOST_IN_RIGHT,
					  ghostLeft:CURRENT_GHOST_IN_LEFT
					};
		console.log(CURRENT_GHOST_IN_RIGHT,CURRENT_MAN_IN_RIGHT,CURRENT_GHOST_IN_LEFT,CURRENT_MAN_IN_LEFT,"----------------")

		return result;
	}
}

module.exports = Game;
function Letters() {
	this.checkIfLetter = function(letter) {			//Checks to make sure the user input is a letter a-z
		var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		for(var i = 0; i < abc.length; i++) {
			if(letter == abc[i]) {
				return true;
			}
		}
		return false;
	}
	this.replaceLetter = function(str, i, letter) {

		return str.substr(0, i) + letter + str.substr(i + 1);
	}
	this.inArray = function(letter, arr) {			

		for(var i = 0; i < arr.length; i++) {		
			if(arr[i] == letter) {
				return true;
			}
		}
		return false;
	}
}

var letterFunctions = new Letters();


exports.letter = {
	letterFunctions: letterFunctions
}
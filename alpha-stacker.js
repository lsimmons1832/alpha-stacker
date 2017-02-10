// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
for (var i = 0; i < alphabet.length; i++) {
	console.log(alphabet.slice(0,i));
	}

}

// Invoke the function and pass in the array
stackLetters(alphabet);

// Then add logic to stackLetters that places a space after 
// every third letter. This will require you to do some basic 
// math in JavaScript, and use an if statement.
function stackLetters(){
var addSpace = "";
for (var i = 0; i < alphabet.length; i++) {
	if (i % 3 === 0) {
		addSpace += " ";
	}
	addSpace += alphabet[i];
	console.log(addSpace);
	}
}
stackLetters(alphabet);

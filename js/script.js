// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Declared variables that will hold a string property and and empty array.
var message = '';
var viewedQuotes =[];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

// Function that will go through the quotes array and return the random quote value.
function getRandomQuote() {
   var randomQuote = Math.floor(Math.random() * quotes.length);

   var splicedQuote = quotes.splice(randomQuote, 1)[0];
 	 viewedQuotes.push(splicedQuote);
 	  if ( quotes.length === 0 ) {
 		   quotes = viewedQuotes;
 		    viewedQuotes = [];
 	    }
  // this will log the quote that has been spliced on the console.
  console.log(splicedQuote);
 	return splicedQuote;
}

// Function that changes background color to a random color
function randomBgColor() {
    var bgColor;
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
  }

  // Function that will print out the random quote and link it to the HTML file.
  function printQuote() {
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	print(message);
	//Generate random color
	randomBgColor();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomBgColor();
}

// Array of quotes.
var quotes = [
  {
    quote : 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    source : 'Lao Tzu',
    tags : 'Philosophy'
  },

  {
    quote : 'One good thing about music, when it hits you, you feel no pain.',
    source : 'Bob Marley',
    tags : 'Music'
  },

  {
    quote : 'To live is to suffer, to survive is to find some meaning in the suffering.',
    source : 'Friedrich Nietzsche',
    tags : 'Philosophy'
  },

  {
    quote : "Dude, Suckin' at something is the first step at being sorta good at something.",
    source : 'Jake (Adventure Time)',
    tags : 'Humor'
  },

  {
    quote : 'Life is really simple, but we insist on making it complicated.',
    source : 'Confucius',
    tags : 'Philosophy'
  }

];

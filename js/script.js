// Variable that will hold the random quote.
var randomQuote;

// Function that will go through the quotes array and return the random quote value.
function getRandomQuote() {
   randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ];
   for (var i = 0; i < quotes.length ; i += 1) {
    quotes[i].quote;
    quotes[i].source;
    quotes[i].tags;
  }
  return randomQuote;
};

// Function that will print out the random quote and link it to the HTML file.
function printQuote() {
  var clickQuote = getRandomQuote();
  var printText = '<p class="quote">' + clickQuote.quote + '</p>' + '<p class="source">' + clickQuote.source + '</p>' + '<p class="source">' + clickQuote.tags + '</p>';
  document.getElementById('quote-box').innerHTML = printText;
};

// Function that changes background color to a random color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
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
  }
];



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "random_bg_color" function is called
document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);

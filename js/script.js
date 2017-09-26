var randomQuote;

function getRandomQuote() {
   randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ];
   for (var i = 0; i < quotes.length ; i += 1) {
    quotes[i].quote;
    quotes[i].source;
    quotes[i].citation;
  }
  return randomQuote;
};

function printQuote() {
  var clickQuote = getRandomQuote();
  var printText = '<p class="quote">' + clickQuote.quote + '</p>' + '<p class="source">' + clickQuote.source + '</p>';
  document.getElementById('quote-box').innerHTML = printText;
};

var quotes = [
  {
    quote : 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    source : 'Lao Tzu'
  },

  {
    quote : 'One good thing about music, when it hits you, you feel no pain.',
    source : 'Bob Marley'
  },

  {
    quote : 'To live is to suffer, to survive is to find some meaning in the suffering.',
    source : 'Friedrich Nietzsche',
  },

  {
    quote : "Dude, Suckin' at something is the first step at being sorta good at something.",
    source : 'Jake (Adventure Time)',
  }
];



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

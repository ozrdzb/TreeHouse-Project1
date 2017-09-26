// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

function getRandomQuote() {

  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('loadQuote').addEventListener("click", printQuote(), false) = quotes[randomNumber];
};

function printQuote(message) {
  
};

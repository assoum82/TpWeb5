   function GuessNum(){
var x = Math.floor(Math.random() * 100) + 1;
var turns = 5;
var hint = 'Guess my number, 1-100!';

while (turns > 0) {
  var guess = prompt(hint +
      ' You have ' + turns + ' guesses left.');
  if (guess == x) {
    document.write(
      '<p><center><h1>You Win !!</h1><br><img src="http://imagespng.com/Data/DownloadLogo/Winner-PNG-Image.png" width="400"></center>');
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    turns = turns - 1;
  }
}
alert('The secret number was ' + x + '.');
    }
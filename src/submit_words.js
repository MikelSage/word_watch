const $ = require('jQuery');

function breakdownListener() {
  
}

function breakdownWords() {
  let words = captureWords();
  displayWords(words);
}

function captureWords() {
  return $('.text-submission textarea').val().split(' ')
}

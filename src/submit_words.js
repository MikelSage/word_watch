const $ = require('jQuery');

function breakdownListener() {
  $('.text-submission button').on('click', breakdownWords)
}

function breakdownWords() {
  let words = captureWords();
  displayWords(words);
}

function captureWords() {
  return $('.text-submission textarea').val().split(' ')
}

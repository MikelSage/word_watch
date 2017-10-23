const $ = require('jQuery');

function breakdownListener() {
  $('.text-submission button').on('click', breakdownWords)
}

function breakdownWords() {
  let words = captureWords();
  let counted_words = countWords(words);
  debugger
  displayWords(counted_words);
}

function captureWords() {
  let raw_words = $('.text-submission textarea').val()
  return raw_words.replace(/\s+/g, " ").trim().split(' ')
}

function countWords(words) {
  let counter = {}
  words.forEach((word) => {
    counter[word] = (counter[word] || 0) + 1
  })
  return counter
}

function displayWords(words) {
  let $article = $('word-count')
  words.forEach((word) => {
    $article.append(
      `<p style="font"></p>`
    )
  })
}

module.exports = {breakdownListener};

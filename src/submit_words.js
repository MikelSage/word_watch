const $ = require('jQuery');

function breakdownListener() {
  $('.text-submission button').on('click', breakdownWords)
}

function breakdownWords() {
  let words = captureWords();
  let counted_words = countWords(words);
  displayWords(counted_words);
}

function captureWords() {
  let raw_words = $('.text-submission textarea').val()
  let trimmed = raw_words.replace(/\s+/g, " ").trim()
  return trimmed.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ')
}

function countWords(words) {
  let counter = {}
  words.forEach((word) => {
    counter[word] = (counter[word] || 0) + 1
  })
  return counter
}

function displayWords(words) {
  let $article = $('.word-count')
  $article.text('')
  for (key in words) {
    $article.append(
      `<p style="font-size: ${words[key]}em">${key}</p>`
    )
  }
}

module.exports = {breakdownListener};

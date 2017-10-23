const $ = require('jQuery')
const topWord = require('./top_word')


function breakdownListener() {
  $('.text-submission button').on('click', breakdownWords)
}

function breakdownWords() {
  let words = captureWords()
  $('.word-count').text('Processing Paragraph...')
  submitWords(words)
}

function updatePage(words) {
  topWord.getTopWord()
  $('.text-submission textarea').val('')
  let counted_words = countWords(words)
  displayWords(counted_words)
}

function captureWords() {
  let raw_words = $('.text-submission textarea').val()
  return formatString(raw_words)
}

function formatString(raw_words) {
  let trimmed = raw_words.replace(/\s+/g, " ").trim().toLowerCase()
  return trimmed.replace(/[.,\/#!$%\^&\*:{}=\-_`~()]/g,"").split(' ')
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

function submitWords(words) {
  let calls = mapWordCalls(words)
  $.when(...calls).then(() => {updatePage(words)})
}

function mapWordCalls(words) {
  return words.map((word) => {
    return $.ajax({
      url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
      method: "POST",
      data: {'word': {'value': word}}
    })
  })
}

module.exports = {breakdownListener}

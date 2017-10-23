const $ = require('jQuery')

function getTopWord() {
  $.ajax({
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    method: "GET"
  }).then((data) => {displayTopWord(data.word)}
  )
}

function displayTopWord(word_data) {
  for (key in word_data) {
    $('.top-word h3').text(`Top word from Word Watch API: ${key} (${word_data[key]})`)
  }
}

module.exports = {getTopWord}

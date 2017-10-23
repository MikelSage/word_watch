const $ = require('jQuery');

function getTopWord() {
  $.ajax({
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    method: "GET"
  }).then((data) => {displayTopWord(data)}
  )
}

function displayTopWord(word_data) {
  $('.top-word h3')
}

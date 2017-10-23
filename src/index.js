const top_word = require('./top_word');
const breakdown = require('./submit_words');

document.addEventListener("DOMContentLoaded", () => {
  top_word.getTopWord();
  breakdown.breakdownListener();
})

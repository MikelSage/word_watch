const topWord = require('./top_word');
const breakdown = require('./submit_words');

document.addEventListener("DOMContentLoaded", () => {
  topWord.getTopWord();
  breakdown.breakdownListener();
})

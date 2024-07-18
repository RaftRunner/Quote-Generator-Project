document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('text');
  const quoteAuthor = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  const tweetQuoteButton = document.getElementById('tweet-quote');

  async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quoteText.textContent = `"${data.content}"`;
      quoteAuthor.textContent = `- ${data.author}`;
      tweetQuoteButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" - ${data.author}`)}`);
    } catch (error) {
      quoteText.textContent = 'An error occurred. Please try again later.';
      quoteAuthor.textContent = '';
    }
  }

  newQuoteButton.addEventListener('click', fetchQuote);

  // Fetch the initial quote
  fetchQuote();
});

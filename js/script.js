$(document).ready(function () {
  var url = 'https://hn.algolia.com/api/v1/search?query=javascript';

  $.getJSON(url, function (data) {

    var currentQuote = '';
    var quotes = data.hits;
    
    $('.read').on('click', function () {
      currentQuote = quotes[Math.floor(Math.random() * quotes.length) ];
    
      $('.quoteBody').hide();
      $('.quoteBodyLink').html(currentQuote.title);
      $('.quoteBodyLink').attr('href', currentQuote.url
        ).attr('target','_blanck');
      $('.quoteAuthor').html(currentQuote.author);
      $('.tweetQuote').attr(
        'href', 
        'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author
      ).attr('target', '_blanck').attr('disabled', false);
      $('.read').html('Show me one more');

    });
  

  });
});
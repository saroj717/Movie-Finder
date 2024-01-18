var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movies = JSON.parse(httpRequest.responseText);
      console.log( 'movies object' + movies)
      movies.Search.forEach(function(movie){
        console.log(movie)
        $('.movies').append(
        '<div>' +
        `<img id="poster" src=${movie.Poster}/>` +
        '<p>Title: <span id="title">' + movie.Title +'</span></p>' +
        '<p>Year: <span id="year"></span>' + movie.Year + '</p>' +
        '<p>Actors: <span id="actors">' + movie.Actors +'</span></p>' +
        '<p>Plot: <span id="plot"></span>' +movie.Plot + '</p>' +
        '</div>');
      })
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

var searchMovie = function () {
  var input = document.querySelector('input').value;
  console.log(input);
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + input + '&plot=short&apikey=b7da8d63');
    httpRequest.send();
  }
}

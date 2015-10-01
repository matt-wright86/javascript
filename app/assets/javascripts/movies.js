$(window).ready(function(){

$("button").on("click", function(){
  $(".low-budgets").html("");
  $(".leo-movies").html("");


  $.getJSON("/movies.json").then(function(data){
    var movies = data.movies;
    console.log(movies);

    var filteredMovies = _.where(movies, {budget: 55 });
        filteredMovies.forEach(function(movie){
                $(".low-budgets").append("<p>" + movie.title + "</p>");
              });

            var leoMovies = _.filter(movies, function(movie){
              return _.contains(movie.stars, 'Leonardo DiCaprio')
            });

          leoMovies.forEach(function(movie){
              $(".leo-movies").append("<p>" + movie.title + "</p>");
            });

  console.log(leoMovies)



  })

})


  });






  // var squares = _.map(movies, function(){
  //   var theSquare = i * i;
  //   return theSquare;
  // });

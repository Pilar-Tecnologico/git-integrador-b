const movies = require('./movies.json');

/**
 * This function returns movies with a higher goal score than 80
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
    let goodMovies = movies.filter(movie => movie.metascore >= 80);
    return goodMovies;
}
console.log(getOnlyGoodMovies());



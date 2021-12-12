const movies = require('./movies.json');

/**
 * This function returns only good movies from array movies
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    const goodMovies = movies.filter(movie => movie.metascore >= 80);
    return JSON.stringify(goodMovies);
}

/**
 * This function returns an array containing the link for each movie
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    //complete with your code
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
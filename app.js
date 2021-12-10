const movies = require('./movies.json');

/**
 * this function will return an array of good movies
 * @param {Array} movies - a array of movie
 * 
 * @returns {Array} of movie objects
 * 
 * @example
 * 
 * let goodMovies = getOnlyGoodMovies();
 */
function getOnlyGoodMovies(){
    //complete with your code
}

/**
 * this function will return an array of strings
 * @param {Array} movies - a array of movie
 * 
 * @returns {Array} of strings
 * 
 * @example
 * 
 * let goodLinks = getGoodImdbLinks();
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
const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
}

/**
 * Complete with a brief definition of what this function should do
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
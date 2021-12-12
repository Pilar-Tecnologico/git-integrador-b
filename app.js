const movies = require('./movies.json');

/**
 * Returns movies with a metascore equal to 80 or higher. 
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
}

/**
 * Returns a link to IMDb movie's web. 
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
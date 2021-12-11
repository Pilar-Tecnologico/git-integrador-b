const movies = require('./movies.json');

/**
 * tthe function brings an array with only the movies rated with metacore more than 80
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
}

/**
 * the function shows the links of the movies searched in the previous method
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
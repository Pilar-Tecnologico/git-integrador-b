const movies = require('./movies.json');

/**
 * The @returns tag documents the value that a function returns. In this case, it returns an array of movie objects.
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
}

/**
 * The @returns tag documents the value that a function returns. In this case, it returns an array of strings.
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
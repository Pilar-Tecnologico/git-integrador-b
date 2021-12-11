const movies = require('./movies.json');

/**
 * Get all movies with an metascore greater than 80
 * @param {number} metascore
 * @returns {Array} of movie objects
 * 
 */
function getOnlyGoodMovies(metascore) { 
   
}

/**
 * Get imdb_title_id from movies and create the movies links
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
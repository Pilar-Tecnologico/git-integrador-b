const movies = require('./movies.json');

/**
 * Returns movies with a metascore equal to 80 or higher. 
 * For example: Uncut gems got a 91 metascore
 * The response would be: "Uncut gems"
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    
    const metascore=80; 
    return movies.find(movie => movie.metascore >= metascore);

}

/**
 * Returns a link to IMDb movie's web. 
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    const movie=getOnlyGoodMovies();

    var salida= "https://www.imdb.com/title/,"+movie.imdb_title_id+"";
    console.log(salida);
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
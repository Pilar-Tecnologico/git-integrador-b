const movies = require('./movies.json');

/**

 * the function brings an array with only the movies rated with metacore more than 80

 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    const goodmovie = movies.filter(movie => movie.metascore>=80);
    return goodmovie;
}

/**
 * the function shows the links of the movies searched in the previous method
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    const movie = getOnlyGoodMovies().map(movie =>{
        return `https://www.imdb.com/title/${movie.imdb_title_id}/ \n`;
    });
    return movie;
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
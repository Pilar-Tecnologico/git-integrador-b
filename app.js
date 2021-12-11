const movies = require('./movies.json');

/**
 * this function brings an array with movies that score 80 or more 
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    const goodMovies = movies.filter( movie => {
        return movie.metascore >= 80;
    })

    return goodMovies; 
}

/**
 * this function bring an array with links from movies of exercise one.
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    const moviesGoodScore = getOnlyGoodMovies().map(moviesGoodScore =>{
        return `https://www.imdb.com/title/${moviesGoodScore.imdb_title_id}/ \n`;
    });
    return moviesGoodScore;

}

function main(){
    const goodMovies = JSON.stringify (getOnlyGoodMovies());
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
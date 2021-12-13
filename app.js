const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * 
 * This function should get the movies with 80 or higher metascore
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
    let objGoodMovies = movies.filter(movies => movies.metascore >= 80);
    let GoodMovies = objGoodMovies.map(a => a);
    return GoodMovies;
}

/**
 * Complete with a brief definition of what this function should do
 * 
 * On this function should return a array of strings
 * with the IMDb links of good movies
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    //complete with your code
    let objMovies = movies.filter(movie => movie.metascore > 80);
    let goodMovies = []
    for (let i = 0; i < objMovies.length; i++){
        goodMovies.push(`\n https://www.imdb.com/title/${objMovies[i].imdb_title_id}/
        `)
    }
    return goodMovies
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
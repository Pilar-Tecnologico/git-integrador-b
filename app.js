const movies = require('./movies.json');

/**
 * Get all movies with an metascore greater than 80
 * @param {number} metascore
 * @returns {Array} of movie objects
 * 
 */
function getOnlyGoodMovies(metascore) { 
    //return movies.filter(movie => movie.metascore >= metascore);
    const peliculas = movies.filter(movie => movie.metascore >= metascore);
    console.log (peliculas);
}

/**
 * Get imdb_title_id from movies and create the movies links
 * @returns {string}
 * 
 */
 function getGoodImdbLinks(){

   movies.forEach(function(element){
    const title = element.imdb_title_id;
    //return 'https://www.imdb.com/title/'+ title;
    console.log('https://www.imdb.com/title/'+ title);
   });
   

}

function main(){
    const goodMovies = getOnlyGoodMovies(80);
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
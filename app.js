const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * We will search movies.json for the highest rated movies with a metacore greater than 80 
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    //complete with your code
    let objMovies = movies.filter(movie => movie.metascore > 80);
    let goodMovies = []
    for (let i = 0; i < objMovies.length; i++){
        let movie = new Object();
        movie['metascore'] = objMovies[i].metascore;
        movie['title'] = objMovies[i].title;
        movie['year'] = objMovies[i].year;
        movie['genre'] = objMovies[i].genre;
        movie['director'] = objMovies[i].director;
        movie['imdb_title_id'] = objMovies[i].imdb_title_id;
        goodMovies.push(`\n   Title    : ${movie.title} 
   Year     : ${movie.year} 
   Genre    : ${movie.genre} 
   Director : ${movie.director}
   Metascore: ${movie.metascore}
   Imdb id  : ${movie.imdb_title_id}\n`);
    }
    return goodMovies
}

/**
 * Complete with a brief definition of what this function should do
 * We will search in movies.json only the links of the best movies, obtained in the previous function 
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    let objMovies = movies.filter(movie => movie.metascore > 80);
    let goodMovies = []
    for (let i = 0; i < objMovies.length; i++){
        goodMovies.push(`\n https://www.imdb.com/title/${objMovies[i].imdb_title_id}/
        `)
    }
    return goodMovies
    //complete with your code
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
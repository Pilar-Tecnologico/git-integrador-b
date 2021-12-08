const movies = require('./movies.json');

/**
 * return only movies with a goalscore of 80 or higher.
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){

   const good=  movies.filter(movie => {
       if ( movie.metascore >= 80 ){
           return true ; 
           
       } 
       
      
   }) 
   return good; 
 
}

/**
 * return an array of links to the IMDb pages of each one
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){

   // const links = movies.map( link => link.imdb_title_id)
    //console.log('https://www.imdb.com/title/'+links,'/\n');
   
   // return "https://www.imdb.com/title/"+links,"/\n";

  

}


function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log('Only movies with metascore of 80 or higher:');
   console.log(goodMovies);
   // console.log(goodLinks);
    
    //console.log(`Only movies with metascore of 80 or higher:\n${(goodMovies)}\n`);
    //console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();
let search = document.getElementById('searchText');

search.addEventListener('keypress', e => {
    let searchText = e.target.value;
    getMovies(searchText);//calling getMovies function as callback function
});

function getMovies(searchText){
    //    let api=`http://www.omdbapi.com/?i=tt3896198&apikey=7796ed60`;
    let api=`http://www.omdbapi.com/?s=${searchText}&apikey=c6baf27a`;
   console.log(api);
    window.fetch(api)
    .then(data =>{ 

       //next step is converting Response data into JSON Object

        //how to convert reponse object into JSON object



       let jsonData = data.json();
      
       jsonData
       .then(movie =>{
           let movies = movie.Search;
           let output ='';
           for(let imdbMovie of movies){
               output +=`
               <div class='container'>
                    <div class='col md-4'>
                        <h3>${imdbMovie.Title}</h3>
                        <p>${imdbMovie.Year}</p>
                        <p>${imdbMovie.imdbID}</p>               
                        <p>${imdbMovie.Type}</p>               
                        <img src="${imdbMovie.Poster}"/>
                    </div>
               </div>
               `;
               
                document.getElementById('template').innerHTML=output;
            }
       }).catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));//fetching data from omdb server..
}   
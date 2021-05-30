document.getElementById('form').addEventListener('submit',(e)=>{
  let title = document.getElementById("title").value;
  let genre = document.getElementById("genre").value;
  let description = document.getElementById("description").value;
  let year = document.getElementById("year").value;
  createMovie(title,genre,description,year);
  e.preventDefault();
});

var movies= [];

function createMovie(title,genre,description,year){
  var movie={
      title:title,
      genre:genre,
      description:description,
      year:year
  }
  movies.push(movie);
  readMovie();
  console.log(movies);
  document.getElementById('form').reset();
}

function readMovie(movie){
  const list = document.querySelector('#movies');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${movie.title}</td>
    <td>${movie.genre}</td>
    <td>${movie.description}}</td>
    <td>${movie.year}}</td>
  `;

  list.appendChild(row);
}

function deleteMovie(i){
  movies.splice(i,1);
  readMovie();
  console.log(movies);
}

function editMovie(index){
  var moviehtml = document.getElementById('movies');
  moviehtml.innerHTML= '';
  for(var i=0; i<movies.length;i++){
      if(i==index){
          moviehtml.innerHTML+= `<div class="red">
          TITLE: <input id="input2title"  placeholder="${movies[i].title}"><br><br>
          GENRE: <input id="input2genre"  placeholder="${movies[i].genre}"><br><br>
          DESCRIPTION: <input id="input2description"  placeholder="${movies[i].description}"><br><br>
          YEAR: <input id="input2year"  placeholder="${movies[i].year}"><br><br>
          <button class="edit" onClick="updateMovie('${i}')">Update</button><button  class="remove" onClick="readMovie()">Cancel</button>
          `
      }else{
          moviehtml.innerHTML+= `<div class="black"><p>TITLE: ${movies[i].title}</p><p>GENRE: ${movies[i].genre}</p><p>DESCRIPTION: ${movies[i].description}</p><p>YEAR: ${movies[i].image}</p><button disabled class="edit" onClick="editMovie('${i}')">Edit</button><button disabled class="remove" onClick="deleteMovie('${i}')">Delete</button> `
      }
  }
}

function updateMovie(index){
  var updateTitle= document.getElementById('input2title').value;
  var updateGenre= document.getElementById('input2genre').value;
  var updateDescription= document.getElementById('input2description').value;
  var updateYear= document.getElementById('input2year').value;

  if (updateTitle == '' || updateGenre=='' || updateDescription=='' || updateYear=='') {
      alert("INCOMPLETE");
  } else {
      movies[index].title= updateTitle;
      movies[index].genre= updateGenre;
      movies[index].description= updateDescription;
      movies[index].year= updateYear;
      readMovie();
  }
}
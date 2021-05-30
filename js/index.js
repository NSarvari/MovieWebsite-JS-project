document.getElementById('form').addEventListener('submit',(e)=>{
  let title = document.getElementById("title").value;
  let genre = document.getElementById("genre").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("image").value;
  createMovie(title,genre,description,image);
  e.preventDefault();
});

var movies= [];

function createMovie(title,genre,description,image){
  var movie={
      title:title,
      genre:genre,
      description:description,
      image:image
  }
  movies.push(movie);
  readMovie();
  console.log(movies);
  document.getElementById('form').reset();
}

function readMovie(){
  var moviehtml = document.getElementById('movies');
  moviehtml.innerHTML= '';
  for(var i=0; i<movies.length;i++){
      moviehtml.innerHTML+= `<div class="black"><p>TITLE: ${movies[i].title}</p><p>GENRE: ${movies[i].genre}</p><p>Description: ${movies[i].description}</p><p>IMAGE: ${movies[i].image}</p><button class="edit" onClick="editMovie('${i}')">Edit</button><button class="remove" onClick="deleteMovie('${i}')">Delete</button> `
  }
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
          IMAGE: <input id="input2image"  placeholder="${movies[i].image}"><br><br>
          <button class="edit" onClick="updateMovie('${i}')">Update</button><button  class="remove" onClick="readMovie()">Cancel</button>
          `
      }else{
          moviehtml.innerHTML+= `<div class="black"><p>TITLE: ${movies[i].title}</p><p>GENRE: ${movies[i].genre}</p><p>DESCRIPTION: ${movies[i].description}</p><p>IMAGE: ${movies[i].image}</p><button disabled class="edit" onClick="editMovie('${i}')">Edit</button><button disabled class="remove" onClick="deleteMovie('${i}')">Delete</button> `
      }
  }
}

function updateMovie(index){
  var updateTitle= document.getElementById('input2title').value;
  var updateGenre= document.getElementById('input2genre').value;
  var updateDescription= document.getElementById('input2description').value;
  var updateImage= document.getElementById('input2image').value;

  if (updateTitle == '' || updateGenre=='' || updateDescription=='' || updateImage=='') {
      alert("INCOMPLETE");
  } else {
      movies[index].title= updateTitle;
      movies[index].genre= updateGenre;
      movies[index].description= updateDescription;
      movies[index].image= updateImage;
      readMovie();
  }
}
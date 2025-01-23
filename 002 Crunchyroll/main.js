function cargarPeliculas() {
    fetch("http://127.0.0.1:3000/peliculas")
          .then(res=>res.json())
          .then(res=>{
              console.log(res);
              const peliculas = res;
              peliculas.forEach(pelicula => {
                  // Definimos la estructura
                  let tr = document.createElement("tr");
                  let td = document.createElement("td");
                  
                  // Añadimos los datos
                  td.innerHTML = pelicula.titulo;
                  tr.appendChild(td);
                  td = document.createElement("td");
                  td.innerHTML = pelicula.genero;
                  tr.appendChild(td);
                  td = document.createElement("td");
                  td.innerHTML = pelicula.director;
                  tr.appendChild(td);
                  td = document.createElement("td");
                  td.innerHTML = pelicula.anio;
                  tr.appendChild(td);
                  document.querySelector("table").appendChild(tr);
              });
          });
}

function cargarDrama() {
    fetch("http://127.0.0.1:3000/peliculas/genero/drama")
          .then(res=>res.json())
          .then(res=>{
              console.log(res);
              const peliculas = res;
              peliculas.forEach(pelicula => {
                  // Definimos la estructura
                  let tr = document.createElement("tr");
                  let td = document.createElement("td");
                  
                  // Añadimos los datos
                  td.innerHTML = pelicula.titulo;
                  tr.appendChild(td);
                  td = document.createElement("td");
                  td.innerHTML = pelicula.genero;
                  tr.appendChild(td);
                  td = document.createElement("td");                  
                  td.innerHTML = pelicula.director;
                  tr.appendChild(td);                  
                  td = document.createElement("td");
                  td.innerHTML = pelicula.anio;
                  tr.appendChild(td);
                  document.querySelector("table").appendChild(tr);
              });
          })
}

function cargarRomance() {
    fetch("http://127.0.0.1:3000/peliculas/genero/romance")
          .then(res=>res.json())
          .then(res=>{
              console.log(res);
              const peliculas = res;
              peliculas.forEach(pelicula => {
                  // Definimos la estructura
                  let tr = document.createElement("tr");
                  let td = document.createElement("td");
                  
                  // Añadimos los datos
                  td.innerHTML = pelicula.titulo;
                  tr.appendChild(td);
                  td = document.createElement("td");
                  td.innerHTML = pelicula.genero;
                  tr.appendChild(td);
                  td = document.createElement("td");                  
                  td.innerHTML = pelicula.director;
                  tr.appendChild(td);                  
                  td = document.createElement("td");
                  td.innerHTML = pelicula.anio;
                  tr.appendChild(td);
                  document.querySelector("table").appendChild(tr);
              });
          })
}
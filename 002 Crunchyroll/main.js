function cargarPeliculas() {
    fetch("http://127.0.0.1:3000/peliculas")
          .then(res=>res.json())
          .then(res=>{
              const tabla = document.getElementById("peliculas");
              
          });
}


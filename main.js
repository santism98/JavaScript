const generos = ["Terror", "Accion", "Comedia", "Romantica"];
const selectGenero = document.getElementById("genero");

const agregarGenerosSelect = () => {
  generos.forEach(genero => {
    const option = document.createElement("option");
    option.value = genero.toLowerCase();
    option.text = genero;
    selectGenero.add(option);
  });
}
//METEMOS GENEROS DEL SELECT
agregarGenerosSelect();

const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const peliculas = [];
//FUNCION AGREGAR PELICULA
const agregarPelicula = () => {
  const titulo = document.getElementById("titulo").value;
  const director = document.getElementById("director").value;
  const anio = document.getElementById("anio").value;
  const genero = document.getElementById("genero").value;

  if (anio.length !== 4) {
    alert("El anio debe tener 4 cifras");
    return;
  }
  peliculas.push({ titulo, director, anio, genero });
  formulario.reset();
}
//FUNCION PINTAR

const rellenarTabla = (pelicula) => {
  const fila = document.createElement("tr");
  const tituloTabla = document.createElement("td");
  const directorTabla = document.createElement("td");
  const anioTabla = document.createElement("td");
  const generoTabla = document.createElement("td");

  tituloTabla.textContent = pelicula.titulo;
  directorTabla.textContent = pelicula.director;
  anioTabla.textContent = pelicula.anio;
  generoTabla.textContent = pelicula.genero;

  fila.append(tituloTabla);
  fila.append(directorTabla);
  fila.append(anioTabla);
  fila.append(generoTabla);
  tablaCuerpo.append(fila);
}
//FUNCION SUBMIT (PARA QUE FUNCIONE TODO)

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarPelicula();
  const ultimaPelicula = peliculas[peliculas.length - 1];
  rellenarTabla(ultimaPelicula);
});
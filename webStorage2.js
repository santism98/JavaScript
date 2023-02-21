const lista = document.querySelector("#lista");
const compra = document.querySelector("#carrito");
const arrayCompra = [
  {
    id: "1",
    nombre: "CARNE"
  },
  {
    id: "2",
    nombre: "PESCADO"
  },
  {
    id: "3",
    nombre: "VERDURAS"
  },
  {
    id: "4",
    nombre: "FRUTA"
  },
  {
    id: "5",
    nombre: "HUEVOS"
  }
];

const arrayProductos = JSON.parse(localStorage.getItem("arrayCompra")) || [];

console.log("arrayProductos", arrayProductos);

// EVENTOS

document.addEventListener("click", (ev) => {
  if (ev.target.matches(".add")) {
    const id = ev.target.parentElement.id;
    const producto = arrayCompra.find((item) => item.id == id);
    arrayProductos.push(producto);
    addLocal();
  } else if (ev.target.matches(".del")) {
    const id = ev.target.parentElement.id;
    const index = arrayProductos.findIndex((item) => item.id == id);
    if (index !== -1) {
      arrayProductos.splice(index, 1);
      addLocal();
    }
  } else if (ev.target.matches(".vaciar")) {
    arrayProductos.length = 0;
    localStorage.removeItem("arrayCompra");
  }

  addCarrito();
});

// FUNCIONES

const addLista = () => {
  lista.innerHTML = "";
  arrayCompra.forEach(({ id, producto }) => {
    lista.innerHTML += `<li id=${id}>${producto} <button class='add'>Añadir</button> </li>`;
  });
};

const addCarrito = () => {
  compra.innerHTML = "";

  arrayProductos.forEach(({ id, producto }) => {
    compra.innerHTML += `<li id=${id}>${producto} <button class='del'>
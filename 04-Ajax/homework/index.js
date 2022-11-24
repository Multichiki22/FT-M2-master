const elegirElementoId = (id) => document.getElementById(id);
const contenidoDeInput = (element) => element.value;
const eliminarLista = () => {
    while (lista.children.length > 0) {
      lista.children[0].remove();
    }
  };
const mostrarListaAmigos = function (res) {
  eliminarLista();
  for (const iterator of res) {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerText = iterator.name;
    lista.appendChild(nuevoLi);
  }
};
const accionDelete = () => {
    deletePeticion(contenidoDeInput(elegirElementoId("inputDelete")))
    elegirElementoId("success").innerText = "Funciono!!"
}
const accionBuscar = () => searchResponese(contenidoDeInput(elegirElementoId("input")));
const mostrarBuscado = (res) => (amigo.innerText = res.name)
const getResponse = () =>$.get("http://localhost:5000/amigos", mostrarListaAmigos);
const searchResponese = (i) =>$.get("http://localhost:5000/amigos/" + i, mostrarBuscado);
const deletePeticion = (i) => $.ajax({url: "http://localhost:5000/amigos/" + i,type: 'DELETE',})
boton.addEventListener("click", getResponse);
search.addEventListener("click", accionBuscar);
elegirElementoId("delete").addEventListener("click", accionDelete);
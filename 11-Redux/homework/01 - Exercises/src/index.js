const { createStore } = require("redux");
const contador = require("./reducer");
const {
  incremento,
  decremento,
  incrementoAsync,
  incrementoImpar,
} = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  //console.log(store.getState().contador);
  const cantidad = store.getState().contador;
  valor.innerText = cantidad;
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}
// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

document
  .getElementById("incremento")
  .addEventListener("click", () => store.dispatch(incremento()));
document
  .getElementById("decremento")
  .addEventListener("click", () => store.dispatch(decremento()));
document.getElementById("incrementoImpar").addEventListener("click", () => {
  store.getState().contador % 2 !== 0 && store.dispatch(incremento());
});
document.getElementById("incrementoAsync").addEventListener("click", () => {
  setTimeout(()=>{store.dispatch(incremento())}, 1000);
});

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

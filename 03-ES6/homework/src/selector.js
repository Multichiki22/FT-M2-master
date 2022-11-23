var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (typeof startEl === "undefined") {
    startEl = document.body;
    if (matchFunc(startEl)) resultSet.push(startEl);
  }
  for (const child of startEl.children) {
    if (matchFunc(child)) resultSet.push(child);
    resultSet = resultSet.concat(
      traverseDomAndCollectElements(matchFunc, child)
    );
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] == "#") return "id"; //su primer caracter es un "#" -> es un id
  if (selector[0] == ".") return "class"; //su primer caracter es un "." -> es una clase
  if (selector.includes(".")) return "tag.class"; //su primer caracter no es ni un "." ni "#" pero contiene "." en algun lado ->tag class
  return "tag"; //ninguna de las anteriores -> tag
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  //va a crear una funcion que devuelve true si el elemento analizado es del tipo que le digamos
  //llama la funcion para saber que tipo de selector es
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    selector = selector.slice(1);
    matchFunction = (elemento) => elemento.id == selector;
  } else if (selectorType === "class") {
    selector = selector.slice(1);
    matchFunction = (elemento) => elemento.classList.contains(selector);
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento) {
      const separador = selector.indexOf(".");
      const clase = selector.slice(separador + 1);
      const tag = selector.slice(0, separador);
      if (
        elemento.tagName.toLowerCase() == tag &&
        elemento.classList.contains(clase)
      )
        return true;
      else return false;
    };
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName.toLowerCase() == selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

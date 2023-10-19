document.addEventListener("DOMContentLoaded", function() {
  const texto = document.querySelector(".text-break");
  const words = texto.textContent.split(" ");
  texto.textContent = ""; // Vacía el contenido del elemento

  words.forEach((word, index) => {
    setTimeout(() => {
      texto.textContent += word + " ";
    }, index * 50); // Añade un retraso de 50 milisegundos (0.05 segundos) por palabra
  });

  // Agrega la clase 'active' después de un breve retraso
  setTimeout(() => {
    texto.classList.add("active");
  }, 100); // Agrega un retraso de 100 milisegundos (0.1 segundos) antes de activar la clase
});


document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.querySelector(".titulo");

  // Agrega la clase 'active' después de un breve retraso
  setTimeout(() => {
    titulo.classList.add("active");
  }, 100); // Agrega un retraso de 100 milisegundos (0.1 segundos) antes de activar la clase
});


document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.querySelector(".Cabeza");

  // Agrega la clase 'active' después de un breve retraso
  setTimeout(() => {
    titulo.classList.add("active");
  }, 100); // Agrega un retraso de 100 milisegundos (0.1 segundos) antes de activar la clase
});

document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.querySelector(".Titulo");

  // Agrega la clase 'active' después de un breve retraso
  setTimeout(() => {
    titulo.classList.add("active");
  }, 100); // Agrega un retraso de 100 milisegundos (0.1 segundos) antes de activar la clase
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que se envíe el formulario por defecto
      const searchInput = document.getElementById("searchInput").value;

      // Realizar una búsqueda en el documento actual (este archivo HTML)
      searchInDocument(document, searchInput, true);

      // Realizar una búsqueda en otros documentos HTML
      const otherDocumentPaths = ['/PARCIAL2/PaginaZelda/HtmlZelda/PaginaInicio.html', '/PARCIAL2/PaginaZelda/HtmlZelda/Perfil.html'];

      otherDocumentPaths.forEach((path) => {
          fetch(path)
              .then((response) => response.text())
              .then((htmlContent) => {
                  const parser = new DOMParser();
                  const otherDocument = parser.parseFromString(htmlContent, "text/html");
                  searchInDocument(otherDocument, searchInput, false);
              })
              .catch((error) => console.error("Error al cargar el documento: " + path, error));
      });
  });

  // para buscar palabras clave en un documento HTML y resaltar coincidencias
  function searchInDocument(document, keyword, isCurrentDocument) {
      const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

      while (textNodes.nextNode()) {
          const textNode = textNodes.currentNode;
          const text = textNode.textContent;
          if (text.includes(keyword)) {
              const parentElement = textNode.parentElement;
              const highlightedText = text.replace(new RegExp(keyword, "gi"), match => `<span style="background-color: yellow;">${match}</span>`);
              parentElement.innerHTML = highlightedText;

             
              if (isCurrentDocument) {
                  parentElement.scrollIntoView();
                  break;
              }
          }
      }
  }
});

$(document).ready(function() {
  $('#miModal').modal('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const accButtons = document.querySelectorAll(".accordion-button");
    const accBodies = document.querySelectorAll(".accordion-body");

    accButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Cerrar todos los acordeones en todos los conjuntos
            accBodies.forEach((body) => {
                body.classList.remove("show");
            });

            // Abrir el acordeón correspondiente
            const target = button.getAttribute("data-bs-target");
            document.querySelector(target).classList.add("show");
        });
    });
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

    // Función para buscar palabras clave en un documento HTML y resaltar coincidencias
    function searchInDocument(document, keyword, isCurrentDocument) {
        const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

        while (textNodes.nextNode()) {
            const textNode = textNodes.currentNode;
            const text = textNode.textContent;
            if (text.includes(keyword)) {
                const parentElement = textNode.parentElement;
                const highlightedText = text.replace(new RegExp(keyword, "gi"), match => `<span style="background-color: yellow;">${match}</span>`);
                parentElement.innerHTML = highlightedText;

                // Si es el documento actual, desplázate al primer resultado resaltado
                if (isCurrentDocument) {
                    parentElement.scrollIntoView();
                    break;
                }
            }
        }
    }
});


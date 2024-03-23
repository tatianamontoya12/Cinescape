// Función para abrir el modal con información específica de la película
function openModal(caratula) {
    var modal = document.getElementById("modal-pelicula");
    var modalImg = modal.querySelector(".modal-content");
    var modalDescription = modal.querySelector(".modal-description");

    // Obtener los datos de la película desde los atributos de la etiqueta
    var titulo = caratula.getAttribute("data-titulo");
    var estreno = caratula.getAttribute("data-estreno");
    var genero = caratula.getAttribute("data-genero");
    var descripcion = caratula.getAttribute("data-descripcion");

    modal.style.display = "block";
    modalImg.src = caratula.querySelector("img").src;
    modalDescription.querySelector("h2").innerText = titulo; 
    modalDescription.querySelector("p:nth-child(2)").innerText = "Estreno: " + estreno; 
    modalDescription.querySelector("p:nth-child(3)").innerText = "Género: " + genero; 
    modalDescription.querySelector("p:nth-child(4)").innerText = "Descripción: " + descripcion; 
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal-pelicula");
    modal.style.display = "none";
}

function panelLateral(){
    let panel =document.getElementById("panel-Lateral");
    panel.classList.toggle("active");
}

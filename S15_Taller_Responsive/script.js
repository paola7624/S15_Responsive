//Mostrar y ocultar opciones 1-4
document.getElementById('opciones-btn').addEventListener('click', function() {
    const externalNav = document.getElementById('externalNav');
    externalNav.classList.toggle('d-none');
});

//Cambiar el subtitulo cada 2 segundos

// Lista de subtítulos que se mostrarán
const subtitles = [
    '...Officia architecto facilis ducimus consectetur',
    '...Lorem ipsum dolor sit amet',
    '...Temporibus autem quibusdam et aut',
];

let index = 0;

// Función para cambiar el subtítulo cada 2 segundos
setInterval(() => {
    // Obtener el elemento del subtítulo
    const subtitleElement = document.getElementById('subtitle');

    // Cambiar el texto del subtítulo
    subtitleElement.textContent = subtitles[index];

    // Actualizar el índice para el siguiente subtítulo
    index = (index + 1) % subtitles.length; // Volver a 0 si llegamos al final del array
    
}, 2000); // Cambia cada 2000 milisegundos (2 segundos)

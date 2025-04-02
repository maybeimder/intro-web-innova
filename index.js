
// Experimento interesante
document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 15;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

// Manejo de eventos
function contactPicasso() {
    alert("Orden de girasoles en camino entonces 🏍️💨");
}
document.getElementById("contact").addEventListener('click', contactPicasso);


// Manipulacion del DOM 
document.getElementById("refresh").addEventListener('click', () => {
    let text = "Es considerado desde la génesis del siglo XX como uno de los mayores pintores que participaron en los variados movimientos artísticos que se propagaron por el mundo y ejercieron una gran influencia en otros grandes artistas de su tiempo...";

    const paragraph = document.getElementById('paragraph');
    paragraph.innerHTML = text
});


// Clases dinamicas
const em = document.querySelector('main section h1 span');

em.addEventListener('mouseenter', () => {
    em.classList.add('active');
});

em.addEventListener('mouseleave', () => {
    em.classList.remove('active');
});


// Crear contenido dinamicamente (tarjetas)
const obras = [
    "Autorretrato (1907)",
    "El sueño (1932)",
    "El viejo guitarrista ciego (1903)",
    "Gato devorando un pájaro (1939)",
    "El Guernica (1937)"
];
  
document.getElementById("deploy").addEventListener('click', () => {
    const container = document.getElementById('content');
    
    obras.forEach( nombre => {
        const div = document.createElement('div');
        div.classList.add('paintings-container');
    
        div.innerHTML = `
        <img src="la-noche-estrellada.jpeg" alt="${nombre}">
        <div class="painting-text">
            <h4 class="painting-name">${nombre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea aut in maiores. Dignissimos, laboriosam. Asperiores voluptatum dolorem placeat reiciendis incidunt soluta accusantium, minus, quas aperiam voluptates officiis optio ex.</p>
        </div>
        `;
    
        container.appendChild(div);
    });
});
  

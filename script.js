const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const image = document.querySelector('#imagen');


let actual_color = 0;
let actual_image = 0;   

const colores = ["#ffc09f", "#ffee93", "#fcf5c7", "#a0ced9", "#adf7b6"];
const imagenes =["./imagenes/burro.gif", "./imagenes/burro2.gif", "./imagenes/burro3.gif", "./imagenes/burro4.gif", "./imagenes/burro5.gif", "./imagenes/burro6.gif"];
const siii =["./imagenes/si.gif"];


const cambioColor = () => {
    let color = Math.floor(Math.random() * colores.length);
    while(color == actual_color){
        color = Math.floor(Math.random() * colores.length);
    }
    actual_color = color;
    document.body.style.backgroundColor = colores[color];
    console.log(color);
}


const cambioImagen = () => {
    let imagen = Math.floor(Math.random() * imagenes.length);
    while(imagen == actual_image){
        imagen = Math.floor(Math.random() * imagenes.length);
    }
    actual_image = imagen;
    image.src = imagenes[imagen];
}



const movimiento = (element, container) => {
    // Obtener las dimensiones del contenedor y del elemento
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    // Calcular las coordenadas máximas para el nuevo posicionamiento
    const maxX = containerWidth - elementWidth;
    const maxY = containerHeight - elementHeight;

    // Generar nuevas coordenadas aleatorias dentro del rango permitido
    const newPosX = Math.floor(Math.random() * maxX);
    const newPosY = Math.floor(Math.random() * maxY);

    // Establecer las nuevas coordenadas de estilo para el elemento
    element.style.position = 'absolute';
    element.style.left = `${newPosX}px`;
    element.style.top = `${newPosY}px`;
};


noBtn.addEventListener('click', () => {
    cambioColor();  
    cambioImagen();
    movimiento(noBtn, buttons);
   
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    let randomIndex = Math.floor(Math.random() * siii.length);
    image.src = siii[randomIndex]; // Cambia el GIF de manera aleatoria
    playaduio();
    buttons.style.display = 'none';
    yesBtn.style.display = 'none';

    lanzarConfeti(); // Activa el confeti
    lluviaDeCorazones(); // Inicia la lluvia infinita de corazones
});

function playaduio(){
    let audio = document.getElementById("musica");
    audio.volume = 0.3; // Ajusta el volumen entre 0 (silencio) y 1 (máximo)
    audio.play();
}

function lanzarConfeti() {
    confetti({
        particleCount: 150,  // Cantidad de partículas
        spread: 70,          // Ángulo de dispersión
        origin: { y: 0.6 }   // Altura desde donde se lanza el confeti
    });
}


function lluviaDeCorazones() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3 y 5 segundos
        document.body.appendChild(heart);

        // Eliminar corazones después de un tiempo para evitar sobrecarga
        setTimeout(() => {
            heart.remove();
        }, 5000); // Se eliminan después de 5 segundos
    }, 500); // Crea un corazón cada 500ms (0.5s)
}


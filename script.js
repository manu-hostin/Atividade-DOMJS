const aumentar = document.getElementById('mais');
const diminuir = document.getElementById('menos');
const numero = document.getElementById('contador');

let numeroSist = 0;

aumentar.addEventListener('click', function(){
    numeroSist++;
    numero.textContent = numeroSist;
});
diminuir.addEventListener('click', function(){
    numeroSist--;
    numero.textContent = numeroSist;
});

// Muda fundo RGB
const botaoFundo = document.getElementById('rgb');
const fundo = document.getElementById('back');

botaoFundo.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Alterar cor do titulo
const botaoCorTitulo = document.getElementById('cor-titulo');
const titulo = document.getElementById('titulo');

botaoCorTitulo.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    titulo.style.color = `rgb(${r}, ${g}, ${b})`;
});

// Alterar cor do parágrafo
const botaoCorFrase = document.getElementById('cor-paragrafo');
const paragrafo = document.getElementById('frase');

botaoCorFrase.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    frase.style.color = `rgb(${r}, ${g}, ${b})`;
});

// Alterar Fonte do título
// Constante com 15 fontes aleatórias
const fontesAleatorias = [
    'Arial', 
    'Verdana', 
    'Tahoma', 
    'Helvetica', 
    'Georgia', 
    'Times New Roman', 
    'Courier New', 
    'Comic Sans MS', 
    'Impact', 
    'Lucida Console', 
    'Segoe UI', 
    'Roboto', 
    'Open Sans', 
    'Lobster', 
    'Pacifico', 
    'Montserrat', 
    'Raleway', 
    'Poppins', 
    'Lato', 
    'Droid Sans', 
    'Fira Sans', 
    'Oswald', 
    'Quicksand', 
    'Playfair Display', 
    'Merriweather', 
    'Bebas Neue', 
    'Indie Flower', 
    'Amatic SC', 
    'Dancing Script'
];
function escolherfontes (){
    const indice = Math.floor(Math.random () * fontesAleatorias.length);
    return fontesAleatorias[indice];
};
const botaoMudarFonte = document.getElementById('fonte-titulo');

botaoMudarFonte.addEventListener('click', function(){
    titulo.style.fontFamily = escolherfontes();
})
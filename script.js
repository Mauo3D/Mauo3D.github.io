// Efecto de letras aleatorias en el título
const titulo = document.querySelector(".titulo-animado");
const textoOriginal = titulo.textContent;
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

let intervalo = null;

function animarTitulo() {
    let i = 0;
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        titulo.textContent = textoOriginal
            .split("")
            .map((letra, index) => {
                if (index < i) return textoOriginal[index];
                return letras[Math.floor(Math.random() * letras.length)];
            })
            .join("");

        if (i >= textoOriginal.length) clearInterval(intervalo);
        i += 1/3;
    }, 30);
}

animarTitulo();

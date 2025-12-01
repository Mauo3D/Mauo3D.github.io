// Detectar scroll para ocultar y mostrar burbuja
const burbuja = document.querySelector(".burbuja");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 300) {
        burbuja.classList.add("oculta");
    } else {
        burbuja.classList.remove("oculta");
    }
});

// BOTONES (Modificar links)
document.getElementById("btnCults").addEventListener("click", () => {
    window.open("TU_LINK_CULTS_AQUI", "_blank");
});

document.getElementById("btnTikTok").addEventListener("click", () => {
    window.open("TU_LINK_TIKTOK_AQUI", "_blank");
});

document.getElementById("btnWhatsApp").addEventListener("click", () => {
    window.open("https://wa.me/549TU_NUMERO", "_blank");
});

document.getElementById("burbuja").addEventListener("click", () => {
    window.open("https://wa.me/549TU_NUMERO", "_blank");
});

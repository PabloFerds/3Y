const container = document.querySelector('.carrossel__container');
const slides = document.querySelector('.slides');

slides.innerHTML += slides.innerHTML;

window.onload = () => {
    container.scrollLeft = container.scrollWidth / 2;
};

function autoSlide() {
    container.scrollLeft += 0.5;

    const metade = container.scrollWidth / 2;

    if (container.scrollLeft >= container.scrollWidth) {
        container.scrollLeft = metade;
    }

    if (container.scrollLeft <= 0) {
        container.scrollLeft = metade;
    }
}

setInterval(autoSlide, 20);

const btnAudio = document.getElementById('btnAudio');
const audio = document.getElementById('audio');

let tocando = false;

btnAudio.addEventListener('click', () => {
    if (!tocando) {
        audio.play();
        btnAudio.textContent = "Pausar ⏸";
        tocando = true;
    } else {
        audio.pause();
        btnAudio.textContent = "Planos ▶";
        tocando = false;
    }
});
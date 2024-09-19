window.onload = function() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 25; i++) {
        let img = document.createElement('img');
        img.src = 'images/0.png';
        img.id = 'cell' + i;
        grid.appendChild(img);
    }
};

function updateImages() {
    const indicesToUpdate = getRandomIndices(3, 6);
    for (let i = 0; i < 25; i++) {
        let img = document.getElementById('cell' + i);
        img.src = indicesToUpdate.includes(i) ? 'images/1.png' : 'images/2.png';
    }

    let button = document.getElementById('changeButton');
    let timerElement = document.getElementById('timer');
    button.disabled = true;
    button.childNodes[0].nodeValue = ''; // Limpa apenas o texto 'Gerar Hack'
    timerElement.style.display = 'inline'; // Mostra o timer dentro do botÃ£o
    startTimer(button, timerElement);
}

function getRandomIndices(min, max) {
    const count = Math.floor(Math.random() * (max - min + 1) + min);
    const indices = new Set();
    while (indices.size < count) {
        indices.add(Math.floor(Math.random() * 25));
    }
    return Array.from(indices);
}

function startTimer(button, timerElement) {
    let counter = 10;
    timerElement.innerText = formatTime(counter);
    const interval = setInterval(() => {
        if (counter > 0) {
            timerElement.innerText = formatTime(--counter);
        } else {
            clearInterval(interval);
            button.disabled = false;
            resetImages();
            button.childNodes[0].nodeValue = 'Hack'; // Restaura o texto original
            timerElement.style.display = 'none'; // Oculta o timer
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padTime(minutes)}:${padTime(remainingSeconds)}`;
}

function padTime(num) {
    return num.toString().padStart(2, '0');
}

function resetImages() {
    for (let i = 0; i < 25; i++) {
        document.getElementById('cell' + i).src = 'images/0.png';
    }
}

function accessGame() {
    window.open("https://diuwin.org/#/register?invitationCode=73674346334", "_blank"); 
}

function tele() {
    window.open("https://t.me/PHXHACKER", "_blank"); 
}
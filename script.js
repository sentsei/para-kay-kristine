const startBtn = document.getElementById('startBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const submitBtn = document.getElementById('submitBtn');

const stepNote = document.getElementById('step-note');
const stepEvasive = document.getElementById('step-evasive');
const stepSlider = document.getElementById('step-slider');

const slider = document.getElementById('rateSlider');
const rateOutput = document.getElementById('rateValue');
const statusOutput = document.getElementById('statusText');
const loveForm = document.getElementById('loveForm');
const loveCard = document.querySelector('.love-card');

const statusPhrases = [
    "Grabe naman... 😢", "Sakit ? 💔", "Sana pwedeng itaas... 🥺", "Konti pa, please? 📉", "Sakto lang 🙂",
    "Puwede na! 😏", "Aba, may pag-asa! 🌟", "Luh, weh? kinikilig nako! 🥰", "aight ill take that one! 💖", "oo may pag asa ka sakin! 😍"
];


startBtn.addEventListener('click', () => {
    stepNote.classList.remove('active');
    setTimeout(() => {
        stepNote.style.display = 'none';
        stepEvasive.style.display = 'block';
        setTimeout(() => stepEvasive.classList.add('active'), 50);
    }, 400);
});


function evadeButton() {
    const card = document.querySelector('.love-card');
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = cardRect.width - btnRect.width - 40;
    const maxY = cardRect.height - btnRect.height - 40;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
noBtn.addEventListener('mouseover', evadeButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); evadeButton(); });


yesBtn.addEventListener('click', () => {
    stepEvasive.classList.remove('active');
    setTimeout(() => {
        stepEvasive.style.display = 'none';
        stepSlider.style.display = 'block';
        setTimeout(() => stepSlider.classList.add('active'), 50);
    }, 400);
});

slider.addEventListener('input', function() {
    rateOutput.textContent = this.value;
    statusOutput.textContent = statusPhrases[this.value - 1];
});


loveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rate = document.getElementById('rateSlider').value;
    

    const emailMo = "justindavekho29@gmail.com"; 
    const subject = encodeURIComponent("Sagot mula sa website mo! ❤️");
    const body = encodeURIComponent(`May sumagot sa website mo!\n\nPangalan: ${name}\nRating: ${rate}/10\n\nSalamat!`);

    window.location.href = `mailto:${emailMo}?subject=${subject}&body=${body}`;

    loveCard.innerHTML = `
        <div style="text-align: center; padding: 40px 10px;">
            <h2 style="color: #ff3366; margin-bottom: 15px;">Bubuksan ang Email! 💌</h2>
            <p style="color: #94a3b8;">Pakipindot ang "Send" sa lalabas na app para maipadala ang sagot niya sa'yo.</p>
        </div>
    `;
});

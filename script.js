let ramenClicks = 0;
const maxClicks = 3;
const gifElement = document.getElementById("emotion-gif");
const noteElement = document.getElementById("note");
const ramenBtn = document.getElementById("ramen-btn");
const hotpotBtn = document.getElementById("hotpot-btn");
const answerElement = document.getElementById("note");

const gifs = [
  "assets/areyousure2-gif.gif",
  "assets/nottoday2-gif.gif",
  "assets/knowbetter-gif.gif"
];

const notes = [
  "Pls choose again (ᵕ—ᴗ—)",
  "Are you S U R E? (¬`‸´¬)",
  "Try again bro ( ◡̀_◡́)ᕤ",
];

// ramen btn clicked
ramenBtn.addEventListener("click", () => {
    if (ramenClicks < maxClicks)
    {
        gifElement.src = gifs[ramenClicks];
        noteElement.textContent = notes[ramenClicks];
        noteElement.style.color = '#FF8A8A';
    }

    ramenBtn.classList.remove('error');
    void ramenBtn.offsetWidth;

    ramenBtn.classList.add('error');
    
    setTimeout(() => {
        button.classList.remove('error');
    }, 300);

    // MY ATTEMPT TO CHANGE THE COLOR OF TEXT BASED ON NUMBER OF CLICKS :D
    // if (ramenClicks > 0)
    // {
    //     noteElement.style.color = '#B82132';
    // }
    ramenClicks = (ramenClicks + 1) % maxClicks;
})

// hotpotBtn.addEventListener("click", () => {
//     gifElement.src = "assets/leggo-gif.gif";
//     answerElement.textContent = "I’m going justtttt because you chose it (⸝⸝ᵕᴗᵕ⸝⸝)";
// })



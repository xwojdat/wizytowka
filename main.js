const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Kamień", "Papier", "Nożyce"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    if (pInput === cInput) {
        alert(`${currentMatch} Remis`);
        return;
    } 
    
    else if (pInput === "Kamień") {
        if (cInput === "Nożyce") {
            alert(`${currentMatch} = Wygrałeś!`);
            pScore++;
        } 
        else {
            alert(`${currentMatch} = Steve Wygrał`);
            cScore++;
        }
    } 
    
    else if (pInput === "Papier") {
        if (cInput === "Kamień") {
            alert(`${currentMatch} = Wygrałeś!`);
            pScore++;
        } 
        else {
            alert(`${currentMatch} = Steve Wygrał`);
            cScore++;
        }
    } 
    
    else {
        if (cInput === "Papier") {
            alert(`${currentMatch} = Wygrałeś`);
            pScore++;
        } 
        else {
            alert(`${currentMatch} = Steve Wygrał`);
            cScore++;
        }
    }
}

function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
  }

function checkWinner() {
    if(pScore === 3 || cScore === 3){
        const winner = 
            pScore === 3
                ?"Wygrałeś! Dobra robota!"
                :"Steve wygrał! Powodzenia następnym razem!";
            alert(winner);
            return true;
    }
    return false;
}

function updateMoves(pInput, cInput) {
    document.getElementById("p-move").src = `./assets/${pInput}.svg`;
    document.getElementById("c-move").src = `./assets/${cInput}.svg`;
}
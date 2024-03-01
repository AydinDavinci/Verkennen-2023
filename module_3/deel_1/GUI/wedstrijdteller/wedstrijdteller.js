inputTeams = document.getElementById('input-teams');

game =
{
    team1Punten: 20,
    team2Punten: 20,
    serving:0,
    lastServer: 0, //wie laatste server was
    lastScore: 0 //wie scoorde een punt
}

inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

function updateScreen() {
    if (game.serving == 1) {
        counterTeam1.classList.add('serving');
        counterTeam2.classList.remove('serving');
    } else if (game.serving == 2) {
        counterTeam2.classList.add('serving');
        counterTeam1.classList.remove('serving');
    }
    counterTeam1.innerText = game.team1Punten;
    counterTeam2.innerText = game.team2Punten;
}

function start(event){
    console.log("you pressed start");
    if(nameTeam1.innerText == "..." || nameTeam2.innerText == "..."){
        alert("er mist een naam");
        return;
    };
    if (!servingTeam1.checked && !servingTeam2.checked){
        alert("wie moet er beginnen")
        return;
    };
    input_teams.style.display = "none";

    counterTeam1.disabled = false;
    counterTeam2.disabled = false;

    game.serving = 2;
    if (servingTeam1.checked){
        game.serving = 1;
    };

    undoButton.disabled = false;
   
    updateScreen();
    
};
startButton.addEventListener('click',start);

function count(event){
    const pointDifference = Math.abs(game.team1Punten - game.team2Punten + 1)

    if ((game.team1Punten > 25 && (pointDifference >= 2)) || (game.team2Punten > 25 && (pointDifference >= 2))) {
        game.team1Punten = 0;
        game.team2Punten = 0;
        game.serving = 0;
        game.lastServer = 0;
        game.lastScore = 0;
        console.log('ronde vorbij')
        if (game.team1Punten > game.team2Punten){
            alert(`${inputTeam2.value} wint!`)
        }else {
            alert(`${inputTeam1.value} wint!`)
        }
        updateScreen()
    }else {
        console.log('je drukte op count');
        console.dir(this);
        if (this.id == 'counterTeam1'){
            game.team1Punten += 1;
            game.serving = 1;
            game.lastServer = 1;
        // game.lastScore = 1;
        }
        else{
            game.team2Punten += 1;
            game.serving = 2;
            game.lastServer = 2;
        // game.lastScore = 2;
        }
        undoButton.disabled = false;
        updateScreen();
    }
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;

}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);


function undoLastPoint(event){
    undoButton.disabled = true;
    if (game.lastServer == 1){
        game.team1Punten -= 1;
        game.serving = 1;
        console.log('-1 team 1')
    }
    else{
        game.team2Punten -= 1;
        game.serving = 2;
        console.log('-1 team 2')
    }
    updateScreen();
}
undoButton.addEventListener("click" ,undoLastPoint)     

// annulleer 
undoButton.disabled = true;
counterTeam1.disabled = true;
counterTeam2.disabled = true;
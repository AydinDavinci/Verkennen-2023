inputTeams = document.getElementById('input-teams');
let timer_score = true;
game =
{
    team1Punten: 20,
    team2Punten: 20,
    serving:0,
    lastserve:0,
    lastscore:0,
    teamtel1:0,
    teamtel2:0
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
    teamteller1.innerText = game.teamtel1;
    teamteller2.innerText = game.teamtel2;
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
    setInterval(updateTeller, 1000);
    
};
startButton.addEventListener('click',start);

function count(event){
    if (document.body.classList.contains('waiting')) return;
    const pointDifference = Math.abs(game.team1Punten - game.team2Punten);
    if ((game.team1Punten > 24 && (pointDifference >= 2)) || (game.team2Punten > 24 && (pointDifference >= 2))) {

        
        game.team1Punten = 0;
        game.team2Punten = 0;
        game.serving = 0;
        game.lastserve = 0;
        game.lastscore = 0;
        console.log("round done");
        if (game.team1Punten > game.team2Punten){
            alert(`${inputTeam2.value} #1 victory royale`);
            game.teamtel1 += 1;
        }else {
            alert(`${inputTeam1.value} #1 victory royale`);
            game.teamtel2 += 1;

        }
        updateScreen();

    } else {
        console.log('je drukte op count')
        console.dir(this);
        if (this.id == 'counterTeam1'){
            game.team1Punten += 1;
            game.serving = 1;

        }
        else{
            game.team2Punten += 1;
            game.serving = 2;

            
        }
        game.lastserve = game.serving;
        console.log('Last Serve:', game.lastserve);
        undoButton.disabled = false;
        updateScreen();
    }
    document.body.classList.add('waiting');
    setTimeout(() => {
        document.body.classList.remove('waiting');
    }, 1500);
    document.body.classList.add('waiting');
    setTimeout(() => {
        document.body.classList.remove('waiting');
    }, 1500);

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
    if (game.lastserve == 1){
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

// anuleeer
undoButton.disabled = true;
counterTeam1.disabled = true;
counterTeam2.disabled = true;

let teller = 0
function updateTeller(){
    teller ++;
    minutes = Math.floor(teller / 60);
    seconds = teller - minutes * 60;
    tijd.innerText = `${minutes}:${seconds}`;
}


start.addEventListener('click' , updateTeller)
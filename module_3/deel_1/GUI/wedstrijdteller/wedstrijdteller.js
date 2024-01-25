inputTeams = document.getElementById('input-teams');

game =
{
    team1Punten: 0,
    team2Punten: 1,
    serving:0
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
   
    updateScreen();
    
};
startButton.addEventListener('click',start);

function count(event){
    console.log('je drukte op count')
    console.dir(this);
    if (this.id == 'counterTeam1'){
        game.team1Punten += 1;
        game.serving = 1;
    }
    else{
        game.team2Punten += 1;
        game.serving = 2;
        
    };
    updateScreen();
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;

}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);

// annulleer 
undoButton.disabled = true;
counterTeam1.disabled = true;
counterTeam2.disabled = true;
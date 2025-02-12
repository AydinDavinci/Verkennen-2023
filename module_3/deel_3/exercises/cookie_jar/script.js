let container = document.getElementById('container');

function create_button(SoortKnop){
    // creeer een standaard button element
    const knop = document.createElement('button');
    knop.type = 'button';
    knop.innerHTML = 'knop'
    knop.classList.add('btn');
    knop.classList.add('btn-primary');
    
    // maak een switch of if statement die de specifieke elementen van een button zet
    if (SoortKnop === "add"){
        knop.innerHTML = 'Voeg toe'
        knop.onclick = proccess_addcookies_click;
    }else if (SoortKnop === "take"){
        knop.innerHTML = 'Pak koekje'
        knop.onclick = proccess_takecookie_click;
    }else{
        knop.innerHTML = 'Sluit pot'
        knop.classList.add('btn-secondary')
        knop.onlclick = proccess_placelit_click;
    }
    // return het button element
    return knop;
}

function proccess_takecookie_click(){ 
    let jar = document.getElementById('cookie-jar');
    jar.removeChild(jar.firstChild);


    console.log('test');
    // als er een cookie gepakt is moet je hier de bovenste verwijderen
    
    // maak een if statement die kijkt hoeveel cookies er nog zijn

    // bij 1 cookie wordt de vraag gesteld: 'Weet u het zeker om de laatste te pakken?'
    // bij 0 wordt de melding gegeven: 'Geen cookies meer' 


}

function proccess_addcookies_click() {
let jar = document.getElementById('cookie-jar'); //vul deze variable met het element cookie-jar
    let currentcookies; // vul deze variablelen met het huidige aantal cookies in de jar 

    cookie = create_cookie()
    jar.appendChild(cookie);
    return
}

function proccess_placelit_click() {
    // verwijder de controls
    console.log('test')
    let lit;  //vul deze variable met het element jar-lit
    
    // voeg de class closed toe aan de lit

    // set de onclick
    lit.onclick = function () {
        this.classList.remove('closed');
        this.onclick = null;
        build_controlls();
    }
}

// zorg dat het nummer van iedere cookie wordt weergegeven
function create_cookie(){
    cookie = document.createElement('div');
    cookie.classList.add('cookie');
    cookie.innerHTML = 'Cookie';

    return cookie;
}

function build_controlls() {
    // maak een array met de 3 verschillende buttons
    const controlList = [create_button('add'), create_button('take'), create_button('place')];
    console.log(controlList)
    // genereer een div element met het id controls
    const controldiv = document.createElement("div");
    controldiv.id = 'controls';
    // loop door de array met buttons en roep voor iedere button de create_button functie aan
    controlList.forEach(i => {
        console.log(i);
        controldiv.appendChild(i)
    });
    // voeg vervolgens na het aanroepen vann de functie de button aan de controls toe

    // voeg de controls toe aan de container
    container.appendChild(controldiv)
}

build_controlls()
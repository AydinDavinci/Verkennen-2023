let playground = document.getElementById('playground');

function proccess_button_click() {
    console.log('Je hebt iets verwijderd!')
    this.remove();
}

let button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Ik ben niet te verwijderen';
button.classList.add('btn');
button.classList.add('btn-primary');
button.onclick = proccess_button_click;

playground.appendChild(button);

let htmlBtn = document.getElementById('htmlKnop'); 
htmlBtn.innerHTML = 'Ik ben niet te verwijderen' 
htmlBtn.onclick = proccess_button_click
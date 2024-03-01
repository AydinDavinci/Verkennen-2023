// function myfunc() {
//   console.log("pressed");
//   alert("U heeft op de knop gedrukt");
//   document.getElementById('achtergrond').classList.toggle('red');
//   var button = document.querySelector("button");
//   button.style.position = "relative";
//   let top = (Math.floor(Math.random() * 7.5) * 100).toString() + "px";
//   let left = (Math.floor(Math.random() * 7.5) * 100).toString() + "px";
//   button.style.top = top;
//   button.style.left = left;
// }
let teller = 0;
setInterval(timer, 1000);
function buttonStart() {
  console.log('game started');
  if (achtergrond.classList.contains('black')){
      achtergrond.classList.toggle('blue');
      teller++;
      console.log('eenden gejaagd' + teller);
      counter.innerText = 'eenden gejaagd: ' + teller;
  }
};

function timer() {
  pakButton.style.position = 'absolute';
  pakButton.style.top = Math.floor(Math.random()*90+5)+'%';
  pakButton.style.left = Math.floor(Math.random()*90+5)+'%';
}

pakButton.addEventListener('click', buttonStart);


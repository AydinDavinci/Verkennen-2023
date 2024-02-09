function myfunc() {
  console.log("pressed");
  alert("U heeft op de knop gedrukt");
  document.getElementById('achtergrond').classList.toggle('red');
  var button = document.querySelector("button");
  button.style.position = "relative";
  let top = (Math.floor(Math.random() * 7.5) * 100).toString() + "px";
  let left = (Math.floor(Math.random() * 7.5) * 100).toString() + "px";
  button.style.top = top;
  button.style.left = left;
}
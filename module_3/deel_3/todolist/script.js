const tasks = ["Ontbijten", "Douchen", "Naar school", "Werken", "Naar school"];

function create_icon() {
    const icon = document.createElement('i');
    icon.className = "fa fa-calendar-o";
    return icon;
}

function create_todoitem(task) {
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-action";
    li.addEventListener('click', () => proccess_todoitem_click(li));

    const icon = create_icon();
    li.appendChild(icon);

    const text = document.createTextNode(` ${task}`);
    li.appendChild(text);

    return li;
}
function proccess_todoitem_click(){

}

function build_todolist(){

}

build_todolist()
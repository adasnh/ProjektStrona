const TodoContainer = document.querySelectorAll('.todo__item_container')[0];
const TodoAdd = document.querySelectorAll('.todo__add_item')[0];

TodoAdd.addEventListener('click', () => {
  TodoContainer.appendChild(genTodoItem());
});

function genTodoItem() {
  let cont = document.createElement('div');
  cont.className = 'todo__item';
  let text = document.createElement('span');
  text.className = 'todo__item__text';
  text.textContent = 'Nowy element';
  let controls = document.createElement('span');
  controls.className = 'todo__item__controls';
  let edit = document.createElement('img');
  edit.src = '../images/pencil.svg';
  edit.onclick = () => (text.textContent = prompt('Edytuj element todo', text.textContent));
  let remove = document.createElement('img');
  remove.src = '../images/cross.svg';
  remove.onclick = () => TodoContainer.removeChild(cont);
  controls.appendChild(edit);
  controls.appendChild(remove);
  cont.appendChild(text);
  cont.appendChild(controls);
  return cont;
}

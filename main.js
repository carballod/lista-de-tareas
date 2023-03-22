const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const tasks = {};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text in tasks){
    input.value = "";
    return;
  } 

  if (text.length < 2) return;

  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = text;

  li.appendChild(p);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  // agregar la tarea al objeto
  tasks[text] = true;

  input.value = "";
  empty.style.display = "none";
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }

    delete tasks[item.firstChild.textContent];
  });

  return deleteBtn;
}


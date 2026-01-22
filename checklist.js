const input = document.querySelector("#input");
const list = document.querySelector("#list");
let editingTask = null;

input.addEventListener("keypress", function (event) {
  console.log(input.value)
  if (event.key == "Enter" && input.value) {
    const li = document.createElement("li");

    const task = document.createElement("span");
    task.classList.add("task");
    task.textContent = this.value;
    task.addEventListener("dblclick", function () {
      editingTask = task;
      input.value = task.textContent;
    });
    li.appendChild(task);

    const remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = "удалить";
    remove.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(remove);

    const mark = document.createElement("span");
    mark.classList.add("mark");
    mark.textContent = "сделано";
    li.appendChild(mark);
    mark.addEventListener("click", function () {
      li.classList.add("done");
    });

    list.appendChild(li);

    this.value = "";
  }
});

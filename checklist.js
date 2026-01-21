const input = document.querySelector("#input");
const list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    const li = document.createElement("li");

    const task = document.createElement("span");
    task.classList.add("task");
    task.textContent = this.value;
    task.addEventListener("dblclick", function () {
      li.remove();
      input.value = task
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

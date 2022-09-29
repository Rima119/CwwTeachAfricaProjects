const InPlan = document.querySelector(".in-plan textarea"),
  inList = document.querySelector(".in-List"),
  pendNum = document.querySelector(".pendNum"),
  clearButton = document.querySelector(".clear-button");

function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  pendNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    inList.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  inList.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}
 InPlan.addEventListener("keyup", (e) => {
  let inputVal = InPlan.value.trim();

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    inList.insertAdjacentHTML("beforeend", liTag);
   InPlan.value = "";
    allTasks();
  }
});


function handleStatus(e) {
  const checkbox = e.querySelector("input"); 
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}


function deleteTask(e) {
  e.parentElement.remove(); 
  allTasks();
}

clearButton.addEventListener("click", () => {
  inList.innerHTML = "";
  allTasks();
});

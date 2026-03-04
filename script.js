function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
  if (sectionId === 'outputDemo') activity1();
  if (sectionId === 'variablesDemo') activity2();
}

function toggleTree(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

// Activity 1: Output Demo
function activity1() {
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML = "Alert + Console message shown.";
}

// Activity 2: Variables Demo
function activity2() {
  let name = "Dimple";
  let age = 20;
  let isStudent = true;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML = `My name is ${name}, I am ${age} years old.`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Button Alert
  document.getElementById("btnClick").addEventListener("click", () => alert("Button Clicked!"));

  // Background Color
  document.getElementById("bgBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#f48fb1";
  });

  // Dark Mode
  document.getElementById("darkBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Add List Item
  document.getElementById("addItemBtn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("list").appendChild(li);
  });

  // Remove Paragraph
  document.getElementById("removeParaBtn").addEventListener("click", () => {
    let para = document.getElementById("para");
    if (para) para.remove();
  });

  // Character Count
  document.getElementById("charInput").addEventListener("input", () => {
    document.getElementById("charCount").textContent =
      "Characters: " + document.getElementById("charInput").value.length;
  });

  // Calculator
  document.getElementById("calcBtn").addEventListener("click", () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("calcResult").textContent = "Sum: " + (n1 + n2);
  });

  // Change Image
  document.getElementById("imgBtn").addEventListener("click", () => {
    document.getElementById("image").src = "https://via.placeholder.com/200";
  });

  // To-Do List CRUD
  document.getElementById("addTodoBtn").addEventListener("click", () => {
    const task = document.getElementById("todoInput").value.trim();
    if (task === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => {
      li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    const span = document.createElement("span");
    span.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.onclick = () => {
      const newTask = prompt("Edit task:", span.textContent);
      if (newTask) span.textContent = newTask;
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✖";
    removeBtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";
  });
});

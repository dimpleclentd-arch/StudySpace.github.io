function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';

  if (sectionId === 'activity1') activity1();
}

// Welcome auto-display
function activity1() {
  document.getElementById("output1").innerHTML = "Welcome to Dimple's Nail Salon ✨";
}

// Client Info
function activity2() {
  const name = document.getElementById("clientName").value;
  const service = document.getElementById("clientService").value;
  const time = document.getElementById("clientTime").value;
  document.getElementById("output2").innerHTML = `${name} booked ${service} at ${time}.`;
  document.getElementById("clientName").value = "";
  document.getElementById("clientService").value = "";
  document.getElementById("clientTime").value = "";
}

// Price Calculator
function activity3() {
  const p1 = Number(document.getElementById("price1").value);
  const p2 = Number(document.getElementById("price2").value);
  const p3 = Number(document.getElementById("price3").value);
  const total = p1 + p2 + p3;
  document.getElementById("output3").innerHTML = `Total Price: ₱${total}`;
  document.getElementById("price1").value = "";
  document.getElementById("price2").value = "";
  document.getElementById("price3").value = "";
}

// Appointment
function activity4() {
  const name = document.getElementById("apptName").value;
  const color = document.getElementById("apptColor").value;
  document.getElementById("output4").innerHTML = `${name} booked with color ${color}.`;
  document.getElementById("apptName").value = "";
  document.getElementById("apptColor").value = "";
}

// Age Check
function activity5() {
  const age = Number(document.getElementById("ageInput").value);
  const msg = age >= 18 ? "You are eligible." : "You must be 18+.";
  document.getElementById("output5").innerHTML = msg;
  document.getElementById("ageInput").value = "";
}

// Queue
function activity6() {
  const q = Number(document.getElementById("queueNum").value);
  let list = "";
  for (let i = 1; i <= q; i++) {
    list += `Client ${i}<br>`;
  }
  document.getElementById("output6").innerHTML = list;
  document.getElementById("queueNum").value = "";
}

// Booking Appointment
function activity7() {
  document.getElementById("output7").innerHTML = "Appointment booked successfully!";
}

// To-Do List
function addTodo() {
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
}

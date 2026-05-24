/* ==================== NAVIGATION ==================== */
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.content').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });
  
  // Show selected section
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
    section.classList.add('active');
  }
}

function toggleTree(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
}

/* ==================== CALCULATOR ==================== */
let calcExpression = "";

function press(val) {
  calcExpression += val;
  document.getElementById("calcScreen").value = calcExpression;
}

function clearScreen() {
  calcExpression = "";
  document.getElementById("calcScreen").value = "";
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculate() {
  let exp = document.getElementById("calcScreen").value;
  try {
    // Handle pi
    exp = exp.replace(/π/g, "Math.PI");
    
    // Handle e (Euler's number)
    exp = exp.replace(/e(?![xp])/g, "Math.E");
    
    // Handle power operations (^ to **)
    exp = exp.replace(/\^/g, "**");
    
    // Handle factorial
    if (exp.includes("!")) {
      exp = exp.replace(/(\d+)!/g, function(match, num) {
        return factorial(parseInt(num));
      });
    }
    
    // Handle percentages (e.g., 50% = 0.5)
    exp = exp.replace(/(\d+)%/g, "($1/100)");
    
    let result = eval(exp);
    
    // Round to avoid floating point errors
    if (!isNaN(result) && isFinite(result)) {
      result = Math.round(result * 100000000) / 100000000;
    }
    
    document.getElementById("calcScreen").value = result;
    calcExpression = result.toString();
  } catch (error) {
    document.getElementById("calcScreen").value = "Error";
    calcExpression = "";
  }
}

/* ==================== STUDENT BASICS ==================== */
function updateStudent() {
  const name = prompt("Enter new name:");
  const age = prompt("Enter new age:");
  const id = prompt("Enter new student ID:");
  
  if (name) document.getElementById("studentName").textContent = name;
  if (age) document.getElementById("studentAge").textContent = age;
  if (id) document.getElementById("studentId").textContent = id;
}

function calcFees() {
  const tuition = parseFloat(document.getElementById("tuition").value) || 0;
  const misc = parseFloat(document.getElementById("misc").value) || 0;
  const total = tuition + misc;
  document.getElementById("feesResult").innerHTML = `
    <p><strong>Tuition: $${tuition.toFixed(2)}</strong></p>
    <p><strong>Misc: $${misc.toFixed(2)}</strong></p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
  `;
}

/* ==================== STUDY TIMER ==================== */
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up! Take a break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

/* ==================== GPA CALCULATOR ==================== */
function addGpaRow() {
  const container = document.getElementById('gpaInputs');
  const row = document.createElement('div');
  row.className = 'gpa-row';
  row.innerHTML = `
    <input type="text" placeholder="Subject" class="subject">
    <input type="number" placeholder="Credits" class="credits" min="1" max="6">
    <input type="number" placeholder="Grade (0-100)" class="grade" min="0" max="100">
  `;
  container.appendChild(row);
}

function calcGpa() {
  const rows = document.querySelectorAll('.gpa-row');
  let totalPoints = 0;
  let totalCredits = 0;
  
  rows.forEach(row => {
    const credits = parseFloat(row.querySelector('.credits').value) || 0;
    const grade = parseFloat(row.querySelector('.grade').value) || 0;
    
    if (credits > 0 && grade >= 0) {
      // Convert grade (0-100) to grade points (0-4)
      const gradePoints = (grade / 100) * 4;
      totalPoints += gradePoints * credits;
      totalCredits += credits;
    }
  });
  
  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById('gpaResult').innerHTML = `
    <p><strong>GPA: ${gpa} / 4.00</strong></p>
    <p><small>Total Credits: ${totalCredits}</small></p>
  `;
}

/* ==================== TOOLS ==================== */

// Background Color Changer
document.addEventListener("DOMContentLoaded", function() {
  
  // Background Color
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    bgBtn.addEventListener("click", function() {
      const colors = [
        "linear-gradient(135deg, #fff5f8 0%, #ffeef5 100%)",
        "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
        "linear-gradient(135deg, #fff3e0 0%, #ffecb3 100%)",
        "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
        "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
        "linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)",
        "linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%)",
        "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)"
      ];
      const colorNames = ["Pink", "Cyan", "Amber", "Green", "Purple", "Blue", "Orange", "Teal"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      document.body.style.background = colors[randomIndex];
      // Store preference
      localStorage.setItem('bgColor', colors[randomIndex]);
    });
    
    // Restore saved background
    const savedBg = localStorage.getItem('bgColor');
    if (savedBg) {
      document.body.style.background = savedBg;
    }
  }

  // Dark Mode Toggle
  const darkBtn = document.getElementById("darkBtn");
  if (darkBtn) {
    darkBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      // Store preference
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Restore saved preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }

  // Study Notes Character Count
  const essayInput = document.getElementById("essayInput");
  if (essayInput) {
    essayInput.addEventListener("input", function() {
      const count = essayInput.value.length;
      document.getElementById("charCount").textContent = "Characters: " + count;
    });
    // Restore saved notes
    const savedNotes = localStorage.getItem('studyNotes');
    if (savedNotes) {
      essayInput.value = savedNotes;
      document.getElementById("charCount").textContent = "Characters: " + savedNotes.length;
    }
    // Save notes on input
    essayInput.addEventListener("input", function() {
      localStorage.setItem('studyNotes', essayInput.value);
    });
  }

  // Add School Item
  const itemInput = document.getElementById("itemInput");
  if (itemInput) {
    // Add item function
    window.addItem = function() {
      const input = document.getElementById("itemInput");
      const item = input.value.trim();
      if (item) {
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("schoolList").appendChild(li);
        input.value = "";
      }
    };
  }

  // Reminder Manager
  window.addReminder = function() {
    const input = document.getElementById("reminderInput");
    const reminder = input.value.trim();
    if (reminder) {
      const li = document.createElement("li");
      li.innerHTML = reminder + ' <span style="float:right;cursor:pointer;" onclick="this.parentElement.remove()">✕</span>';
      document.getElementById("reminderList").appendChild(li);
      input.value = "";
    }
  };

  // To-Do List
  window.addTodo = function() {
    const task = document.getElementById("todoTask").value.trim();
    const priority = document.getElementById("todoPriority").value;
    
    if (task) {
      const li = document.createElement("li");
      const priorityColors = {
        'Low': '#27ae60',
        'Medium': '#f39c12',
        'High': '#e74c3c'
      };
      li.innerHTML = `
        <span style="border-left: 4px solid ${priorityColors[priority]}">${task}</span>
        <small style="color: ${priorityColors[priority]}"> - ${priority} Priority</small>
        <span style="float:right;cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
      `;
      document.getElementById("todoList").appendChild(li);
      document.getElementById("todoTask").value = "";
    }
  };

});

/* ==================== DYNAMIC GRADE CALCULATOR ==================== */
let quizCount = 0;

function addQuizInput() {
  quizCount++;
  const container = document.getElementById('quizInputs');
  const inputGroup = document.createElement('div');
  inputGroup.className = 'quiz-input-group';
  inputGroup.innerHTML = `
    <input type="number" id="quizScore${quizCount}" placeholder="Quiz ${quizCount} Score" min="0" max="100">
    <button class="remove-btn" onclick="removeQuizInput(this)">✕</button>
  `;
  container.appendChild(inputGroup);
}

function removeQuizInput(btn) {
  btn.parentElement.remove();
}

function calculateGrade() {
  // Get quiz scores
  const inputs = document.querySelectorAll('.quiz-input-group input');
  let quizTotal = 0;
  let quizCount = 0;

  inputs.forEach(input => {
    const score = parseFloat(input.value);
    if (!isNaN(score)) {
      quizTotal += score;
      quizCount++;
    }
  });

  // Get exam and project scores
  const exam = parseFloat(document.getElementById("exam").value) || 0;
  const project = parseFloat(document.getElementById("project").value) || 0;

  // Calculate totals
  const quizMax = quizCount * 100;
  const totalScore = quizTotal + exam + project;
  const maxScore = quizMax + 100 + 100;
  const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
  
  // Determine letter grade
  let grade = "F";
  let gradeColor = "#e74c3c";
  if (percentage >= 90) { grade = "A"; gradeColor = "#27ae60"; }
  else if (percentage >= 80) { grade = "B"; gradeColor = "#2ecc71"; }
  else if (percentage >= 70) { grade = "C"; gradeColor = "#f39c12"; }
  else if (percentage >= 60) { grade = "D"; gradeColor = "#e67e22"; }
  
  document.getElementById("gradeResult").innerHTML = `
    <p><strong>Quiz Total: ${quizTotal}/${quizMax}</strong></p>
    <p><strong>Exam: ${exam}/100</strong></p>
    <p><strong>Project: ${project}/100</strong></p>
    <hr style="margin: 10px 0; border: 1px solid var(--primary-light);">
    <p><strong>Total: ${totalScore}/${maxScore}</strong></p>
    <p><strong>Percentage: ${percentage.toFixed(2)}%</strong></p>
    <p style="font-size: 1.5rem; color: ${gradeColor};">
      <strong>Grade: ${grade}</strong>
    </p>
  `;
}

function resetQuiz() {
  quizCount = 0;
  document.getElementById('quizInputs').innerHTML = '';
  document.getElementById("exam").value = "";
  document.getElementById("project").value = "";
  document.getElementById("gradeResult").innerHTML = '';
  addQuizInput(); // Re-initialize with one quiz input
}

// Initialize with one quiz input on page load
document.addEventListener("DOMContentLoaded", function() {
  addQuizInput();
});

/* ==================== KEYBOARD SUPPORT ==================== */
document.addEventListener("keydown", function(e) {
  // Calculator keyboard support
  if (document.activeElement.tagName !== "INPUT" && 
      document.activeElement.tagName !== "TEXTAREA") {
    
    const key = e.key;
    const validKeys = "0123456789+-*/().";
    
    if (validKeys.includes(key)) {
      press(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearScreen();
    } else if (key === "Backspace") {
      calcExpression = calcExpression.slice(0, -1);
      document.getElementById("calcScreen").value = calcExpression;
    }
  }
});

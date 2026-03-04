// Show/hide sections
function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>sec.style.display='none');
  document.getElementById(id).style.display='block';

  // Auto-run certain demos
  if(id==='outputDemo') outputDemo();
  if(id==='variablesDemo') variablesDemo();
  if(id==='calcDemo') calcDemo();
  if(id==='promptDemo') promptDemo();
  if(id==='ageCheck') ageCheck();
  if(id==='loopsDemo') loopsDemo();
}

function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

/* ---------------- Exercise 2 ---------------- */

// Activity 1: Output
function outputDemo(){
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML="Alert + Console message shown.";
}

// Activity 2: Variables
function variablesDemo(){
  let name="Client", age=25, isStudent=true;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML=`My name is ${name}, I am ${age} years old.`;
}

// Activity 3: Calculator
function calcDemo(){
  let a=10, b=5;
  document.getElementById("outputCalc").innerHTML=
    `Sum:${a+b}, Difference:${a-b}, Product:${a*b}, Quotient:${a/b}`;
}

// Activity 4: Prompt Input
function promptDemo(){
  let name=prompt("Enter your name:");
  let fav=prompt("Favorite nail color:");
  alert(`Hello ${name}! Your favorite color is ${fav}.`);
  document.getElementById("outputPrompt").innerHTML=`Hello ${name}, favorite color: ${fav}`;
}

// Activity 5: Age Check
function ageCheck(){
  let age=prompt("Enter age:");
  document.getElementById("outputAge").innerHTML=(age>=18)?"You are eligible.":"You are not eligible.";
}

// Activity 6: Loops
function loopsDemo(){
  let out="For loop: ";
  for(let i=1;i<=10;i++) out+=i+" ";
  out+="<br>While loop: ";
  let j=10; while(j>=1){out+=j+" "; j--;}
  document.getElementById("outputLoops").innerHTML=out;
}

// Activity 7: Button Alert
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("btnClick");
  if(btn) btn.addEventListener("click",()=>alert("Button Clicked!"));
});

/* ---------------- Exercise 3 ---------------- */

document.addEventListener("DOMContentLoaded",()=>{

  // Background Color
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#ffe4e1");

  // Dark Mode
  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  // Add List Item
  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent="New Service Item";
    document.getElementById("list").appendChild(li);
  });

  // Remove Paragraph
  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("para");
    if(p) p.remove();
  });

  // Character Count
  const charInput=document.getElementById("charInput");
  if(charInput) charInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+charInput.value.length;
  });

  // Calculator
  const calcBtn=document.getElementById("calcBtn");
  if(calcBtn) calcBtn.addEventListener("click",()=>{
    let n1=Number(document.getElementById("num1").value);
    let n2=Number(document.getElementById("num2").value);
    document.getElementById("calcResult").textContent="Sum: "+(n1+n2);
  });

  // Change Image
  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    document.getElementById("image").src="https://via.placeholder.com/200/ff69b4/fff?text=Nail+Art";
  });

  // To-Do List CRUD
  const addTodoBtn=document.getElementById("addTodoBtn");
  if(addTodoBtn) addTodoBtn.addEventListener("click",()=>{
    const task=document.getElementById("todoInput").value.trim();
    if(task==="") return;

    const li=document.createElement("li");

    const cb=document.createElement("input");
    cb.type="checkbox";
    cb.onchange=()=>li.style.textDecoration=cb.checked?"line-through":"none";

    const span=document.createElement("span");
    span.textContent=task;

    const edit=document.createElement("button");
    edit.textContent="✎";
    edit.onclick=()=>{
      const nt=prompt("Edit task:", span.textContent);
      if(nt) span.textContent=nt;
    };

    const del=document.createElement("button");
    del.textContent="✖";
    del.onclick=()=>li.remove();

    li.append(cb,span,edit,del);
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value="";
  });
});

/* ---------------- Exercise 4 ---------------- */

// Grade Calculator
document.addEventListener("DOMContentLoaded",()=>{
  const calcGradeBtn=document.getElementById("calcGradeBtn");
  if(calcGradeBtn) calcGradeBtn.addEventListener("click",()=>{
    const quiz=Number(document.getElementById("quiz").value);
    const exam=Number(document.getElementById("exam").value);
    const mco=Number(document.getElementById("mco").value);
    const grade=(quiz*0.2)+(exam*0.3)+(mco*0.5);
    let letter="";
    if(grade>=90) letter="A";
    else if(grade>=80) letter="B";
    else if(grade>=70) letter="C";
    else if(grade>=60) letter="D";
    else letter="F";
    document.getElementById("result").innerHTML=`Final Grade: ${grade.toFixed(1)}<br>Grade: ${letter}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
  });
});

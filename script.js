function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>{
    sec.style.display='none';
    sec.style.opacity=0;
  });
  const section=document.getElementById(id);
  section.style.display='block';
  setTimeout(()=>section.style.opacity=1,50);

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

/* ---------------- Salon Basics ---------------- */
function outputDemo(){
  alert("Welcome to Dimple's Nail Salon!");
  document.getElementById("output1").innerHTML="We’re glad to pamper you today 💅";
}
function variablesDemo(){
  let client="Sophia", age=22, bookedService="Manicure";
  document.getElementById("output2").innerHTML=`Client: ${client}, Age: ${age}, Service: ${bookedService}`;
}
function calcDemo(){
  let manicure=300, pedicure=400;
  document.getElementById("outputCalc").innerHTML=`Total Price: ₱${manicure+pedicure}`;
}
function promptDemo(){
  let name=prompt("Enter your name:");
  let fav=prompt("Favorite nail polish color:");
  document.getElementById("outputPrompt").innerHTML=`Hello ${name}, we’ll prepare ${fav} polish for you!`;
}
function ageCheck(){
  let age=prompt("Enter your age:");
  document.getElementById("outputAge").innerHTML=(age>=18)?"You can book gel polish.":"Sorry, gel polish is for 18+.";
}
function loopsDemo(){
  let slots="Available slots: ";
  for(let i=9;i<=17;i++) slots+=i+":00, ";
  document.getElementById("outputLoops").innerHTML=slots;
}
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("btnClick");
  if(btn) btn.addEventListener("click",()=>alert("Your appointment is confirmed!"));
});

/* ---------------- Interactive Salon ---------------- */
document.addEventListener("DOMContentLoaded",()=>{

  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#ffe4e1");

  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent="Hand Massage";
    document.getElementById("list").appendChild(li);
  });

  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("para");
    if(p) p.remove();
  });

  const charInput=document.getElementById("charInput");
  if(charInput) charInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+charInput.value.length;
  });

  const calcBtn=document.getElementById("calcBtn");
  if(calcBtn) calcBtn.addEventListener("click",()=>{
    let n1=Number(document.getElementById("num1").value);
    let n2=Number(document.getElementById("num2").value);
    document.getElementById("calcResult").textContent="Total Service Price: ₱"+(n1+n2);
  });

  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    document.getElementById("image").src="https://via.placeholder.com/200/ff69b4/fff?text=Nail+Art";
  });

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

/* ---------------- Training Grades ---------------- */
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
    document.getElementById("result").innerHTML=`Staff Training Score: ${grade.toFixed(1)}<br>Grade: ${letter}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
  });
});

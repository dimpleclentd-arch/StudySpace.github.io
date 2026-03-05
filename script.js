// Show/hide sections
function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>{
    sec.style.display='none';
    sec.style.opacity=0;
  });
  const section=document.getElementById(id);
  section.style.display='block';
  setTimeout(()=>section.style.opacity=1,50);
}

// Toggle sidebar tree
function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

/* ---------------- Student Basics ---------------- */
function variablesDemo(){
  let name=document.getElementById("studentName").value;
  let age=document.getElementById("studentAge").value;
  let course=document.getElementById("studentCourse").value;
  if(name==="" || age==="" || course===""){
    alert("Please fill in all fields.");
    return;
  }
  document.getElementById("output2").innerHTML=
    `<strong>Student Record</strong><br>Name: ${name}<br>Age: ${age}<br>Course: ${course}`;
  document.getElementById("studentName").value="";
  document.getElementById("studentAge").value="";
  document.getElementById("studentCourse").value="";
}

function calcDemo(){
  let f1=Number(document.getElementById("fee1").value);
  let f2=Number(document.getElementById("fee2").value);
  let f3=Number(document.getElementById("fee3").value);
  let total=f1+f2+f3;
  document.getElementById("outputCalc").innerHTML=`Total Fees: ₱${total}`;
  document.getElementById("fee1").value="";
  document.getElementById("fee2").value="";
  document.getElementById("fee3").value="";
}

function loopsDemo(){
  let start=Number(document.getElementById("startHour").value);
  let end=Number(document.getElementById("endHour").value);
  if(!start || !end || start>end){
    alert("Please enter valid start and end hours.");
    return;
  }
  let schedule="Class hours: ";
  for(let i=start;i<=end;i++) schedule+=i+":00, ";
  document.getElementById("outputLoops").innerHTML=schedule;
  document.getElementById("startHour").value="";
  document.getElementById("endHour").value="";
}

/* ---------------- Tools ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#fff5f8");

  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let item=prompt("Enter school item:");
    if(item){
      let li=document.createElement("li");
      li.textContent=item;
      document.getElementById("list").appendChild(li);
    }
  });

  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("announcement");
    if(p) p.remove();
  });

  const essayInput=document.getElementById("essayInput");
  if(essayInput) essayInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+essayInput.value.length;
  });

  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    let url=prompt("Enter image URL:");
    if(url) document.getElementById("image").src=url;
  });

  const addTodoBtn=document.getElementById("addTodoBtn");
  if(addTodoBtn) addTodoBtn.addEventListener("click",()=>{
    const month=todoMonth.value, date=todoDate.value, task=todoTask.value,
          priority=todoPriority.value, notes=todoNotes.value, reminder=todoReminder.value;
    if(task==="") return;
    let li=document.createElement("li");
    li.innerHTML=`<strong>${month} ${date}</strong><br>
                  Task: ${task}<br>
                  Priority: ${priority}<br>
                  Notes: ${notes}<br>
                  Reminder: ${reminder}`;
    document.getElementById("todoList").appendChild(li);
    todoMonth.value=""; todoDate.value=""; todoTask.value="";
    todoPriority.value=""; todoNotes.value=""; todoReminder.value="";
  });
});

/* ---------------- Scientific Calculator ---------------- */
function press(val){
  let screen=document.getElementById("calcScreen");
  if(val==="⌫"){ screen.value=screen.value.slice(0,-1); return; }
  if(val==="C"){ screen.value=""; return; }
  if(val==="π"){ screen.value+=Math.PI; return; }
  if(val==="e"){ screen.value+=Math.E; return; }
  if(val==="sin("){ screen.value+="Math.sin("; return; }
  if(val==="cos("){ screen.value+="Math.cos("; return; }
  if(val==="tan("){ screen.value+="Math.tan("; return; }
  if(val==="ln("){ screen.value+="Math.log("; return; }
  if(val==="log("){ screen.value+="Math.log10("; return; }
  if(val==="sqrt("){ screen.value+="Math.sqrt("; return; }
  if(val==="cbrt("){ screen.value+="Math.cbrt("; return; }
  if(val==="^2"){ screen.value+="**2"; return; }
  if(val==="^3"){ screen.value+="**3"; return; }
  if(val==="^"){ screen.value+="**"; return; }
  if(val==="!"){ screen.value+="!"; return; }
  screen.value+=val;
}

function clearScreen(){
  document.getElementById("calcScreen").value="";
}

function calculate(){
  let exp=document.getElementById("calcScreen").value;
  // Factorial handling
  if(exp.includes("!")){
    exp=exp.replace(/(\d+)!/g,(match,n)=>{
      let num=parseInt(n), fact=1;
      for(let i=1;i<=num;i++) fact*=i;
      return fact;
    });
  }
  try{
    document.getElementById("calcScreen").value=eval(exp);
  }catch{
    document.getElementById("calcScreen").value="Error";
  }
}

/* ---------------- Grades ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  let history=[];
  const calcGradeBtn=document.getElementById("calcGradeBtn");
  if(calcGradeBtn) calcGradeBtn.addEventListener("click",()=>{
    const quiz=Number(document.getElementById("quiz").value);
    const exam=Number(document.getElementById("exam").value);
    const project=Number(document.getElementById("mco").value);
    const grade=(quiz*0.2)+(exam*0.3)+(project*0.5);
    let letter=grade>=90?"A":grade>=80?"B":grade>=70?"C":grade>=60?"D":"F";
    let result=`Final Grade: ${grade.toFixed(1)} | Letter: ${letter}`;
    history.push(result);
    document.getElementById("result").innerHTML=result+`<br><br>History:<br>${history.join("<br>")}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
  });
});

/* ---------------- Tools ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  // Background color changer
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>{
    document.body.style.background=
      document.body.style.background==="#fff5f8" ? "#f0f0f0" : "#fff5f8";
  });

  // Dark mode toggle
  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
  });

  // Add school item to list
  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let item=prompt("Enter school item:");
    if(item){
      let li=document.createElement("li");
      li.textContent=item;
      document.getElementById("list").appendChild(li);
    }
  });

  // Remove announcement paragraph
  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("announcement");
    if(p) p.remove();
  });

  // Essay character count
  const essayInput=document.getElementById("essayInput");
  if(essayInput) essayInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent=
      "Characters: "+essayInput.value.length;
  });

  // Change profile image
  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    let url=prompt("Enter image URL:");
    if(url) document.getElementById("image").src=url;
  });

  // To‑Do list
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

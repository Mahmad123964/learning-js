
const heading = document.querySelector("#title")

const button = document.querySelector("#btn")
button.addEventListener("click",() =>{
    heading.textContent = "Js Rocks"
    alert("Button is clicked")
})


let count = 0;
const heading = document.querySelector("#count")
const button = document.querySelector("#btn")
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")

const updateUI = ()=> {
    heading.textContent = count;

    if(count===0){
        heading.style.color = "red";
    } else {
        heading.style.color = "green";
    }
}

button.addEventListener("click",()=> {
    count++;
    updateUI();
})

button1.addEventListener("click",()=>{
    if(count > 0) {
        count--;
    }
    
    updateUI();
})

button2.addEventListener("click",()=>{
    count = 0;
   
    updateUI();
})


const input = document.querySelector("#nameInput")
const button = document.querySelector("#btn")
const greeting = document.querySelector("#greeting")

button.addEventListener("click",()=>{
    const name = input.value.trim();

    if(name === "" ) {
        alert("Please enter your name")
    } else {
       greeting.textContent = `Hello ${name}`
       input.value = "";
    }
    
})

const title = document.querySelector("#title");
const button = document.querySelector("#btn")
let isDark = false;

button.addEventListener("click",()=>{
    if(isDark) {
       document.body.style.background="white"
       title.style.color="black"
       isDark = false;
    } else {
    document.body.style.background="black"
    title.style.color="white"
      isDark = true;
    }
    
    
})

const input = document.querySelector("#nameInput")
const output = document.querySelector("#output")

input.addEventListener("input",()=>{
  output.textContent=input.value;
})

const message = document.querySelector("#message")
const count = document.querySelector("#count")

message.addEventListener("input",()=>{
  count.textContent= `characters: ${message.value.length}`

  if(message.value.length<=10){
    count.style.color="green"
  } else if (message.value.length<=20){
    count.style.color="orange"
  } else {
    count.style.color="red"
  }
})

const input =
document.querySelector("#nameInput");

input.addEventListener(
  "keydown",
  (e) => {
    console.log(e.key);
  }
);


//create element
const heading = document.createElement("h1")
heading.textContent="Ahmad"
document.body.appendChild(heading) // Appen child

const title =
document.querySelector("#title");

title.remove();// remove child

const input= document.querySelector("#todoList")
const button = document.querySelector("#btn")
const list = document.querySelector("#list")

button.addEventListener("click",()=>{
  const task = input.value.trim();

  if(task===""){
    alert("Task can't be empty")
    return
  }

  const li = document.createElement("li")
  li.textContent = task

  const deleteButton = document.createElement("button")
  deleteButton.textContent="❌"

  deleteButton.addEventListener("click",()=>{
    li.remove()

  })

  li.append(deleteButton)

  list.append(li)

  input.value=""
})
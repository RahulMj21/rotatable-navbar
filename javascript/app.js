console.log("hey I am Rahul Mondal");

const container = document.querySelector(".container");
const openTab = document.getElementById("open");
const closeTab = document.getElementById("close");

openTab.addEventListener("click",()=>container.classList.add("show-nav"));
closeTab.addEventListener("click",()=>container.classList.remove("show-nav"));
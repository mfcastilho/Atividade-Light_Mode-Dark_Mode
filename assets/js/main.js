console.log("Está rodando....");

const body = document.querySelector("body");
const button = document.querySelector("[data-mode-button]");

function changingMode(event){
  console.log(event.target.innerHTML);
  if(event.target.innerHTML == "Dark Mode"){
    button.innerHTML = "Light Mode";
    button.classList.add("dark-mode");
    body.classList.add("dark-mode");
  }else if(event.target.innerHTML == "Light Mode"){
    button.innerHTML = "Dark Mode";
    button.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
  }
}

button.addEventListener("click",changingMode);
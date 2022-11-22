console.log("Está rodando....");

const body = document.querySelector("body");
const button = document.querySelector("[data-mode-button]");
const h1 = document.querySelector("h1");
const footer = document.querySelector("footer");

function changingMode(event){
  console.log(event.target.innerHTML);
  if(event.target.innerHTML == "Dark Mode"){
    h1.innerHTML = "Dark Mode ON";
    button.innerHTML = "Light Mode";
    button.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    body.classList.add("dark-mode");
  }else if(event.target.innerHTML == "Light Mode"){
    h1.innerHTML = "Light Mode ON";
    button.innerHTML = "Dark Mode";
    button.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
  }
}

button.addEventListener("click",changingMode);
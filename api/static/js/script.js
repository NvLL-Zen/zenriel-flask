import { glitchText } from "./glitch.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainName = document.querySelector("#P1-D1-H1");
    const P1_D1 = document.querySelector("#P1-D1")
    const changeName = "Hello, I'm Fauzan Rizky" 
    setTimeout(() => {
        mainName.innerHTML = changeName
        P1_D1.style.textShadow = "2px -2px #51EEFC"
        glitchText("P1-D1-H1",changeName)
    }, 2000);
    
});
console.log("Test")

document.addEventListener("DOMContentLoaded", () => {
    const changeName = "Hello, I'm Fauzan Rizky"
    const mainName = document.querySelector("#P1-D1-H1")
    setTimeout(() => {
        mainName.innerHTML = changeName
    }, 2500);
    
    
});
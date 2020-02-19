window.addEventListener("load", ()=> {
    console.log("Hello TechSwitch!")
});

const postTitle = document.getElementById("title");

document.addEventListener("click", (e)=>{
    e.target.remove();
});
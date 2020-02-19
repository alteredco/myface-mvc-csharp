// window.addEventListener("load", ()=> {
//     console.log("Hello TechSwitch!")
// });
//
// const postTitle = document.getElementById("title");

// document.addEventListener("click", (e)=>{
//     e.target.remove();
// });

const newPostBtn = document.getElementById("newPost");
const modal = document.getElementById("modal");

window.onload = () => {
    newPostBtn.onclick = null;
};

newPostBtn.addEventListener("click", (e)=>{
    modal.style.display = "block";
    console.log("modal time!");
});





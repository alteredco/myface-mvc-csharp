// window.addEventListener("load", ()=> {
//     console.log("Hello TechSwitch!")
// });
//
// const postTitle = document.getElementById("title");

// document.addEventListener("click", (e)=>{
//     e.target.remove();
// });

/*create modal*/
const newPostBtn = document.getElementById("newPost");
const modal = document.getElementById("modal");
//
window.onload = () => {
    newPostBtn.onclick = null;
};

newPostBtn.addEventListener("click", (e)=>{
    modal.style.display = "block";
    console.log("modal time!");
});

/*create delete button */
document.querySelectorAll(".post__container").forEach(post => {
    const button = document.createElement("button");
    button.className = "post__deleteBtn";
    button.classList.add("--growText");
    button.innerHTML = "Delete";
    post.appendChild(button);
    button.addEventListener("click", (e)=> {
        post.remove();
    })
});









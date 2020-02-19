const newPostBtn = document.getElementById("newPost");
const newUserBtn = document.getElementById("newUser");
const modal = document.getElementById("modal");

/*new post modal*/

newPostBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.style.display = "block";
});

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
};

/*new user modal */
console.log(newUserBtn.innerHTML);

newUserBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.style.display = "block";
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











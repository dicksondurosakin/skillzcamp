
let mini = document.querySelector(".minidiv")
let hamburger = document.querySelector(".hamburger")
let closebtn = document.querySelector(".close")
let navbar = document.querySelector(".wrapper")
let minidiv =document.querySelector(".minidiv ul")






hamburger.addEventListener("click", () =>{
    mini.style.transform ="translateY(0px)";
if (mini.style.transform= "translateY(0px)") {
    hamburger.style.display="none";
    closebtn.style.display="block";
navbar.style.background ="white"

}
})

closebtn.addEventListener("click",() =>{
    mini.style.transform="translateY(-768px)";
    if (mini.style.transform="translateY(-768px)") {
    hamburger.style.display="block"; 
    closebtn.style.display="none"
    navbar.style.background ="#d0ecf5"
    minidiv.style.visibility="visible"
    }
})
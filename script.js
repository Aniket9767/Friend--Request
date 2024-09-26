var istatus=document.querySelector("h5")

var add=document.querySelector("#add")

add.addEventListener("click",function(){

    istatus.innerHTML="Friends"
     istatus.style.color="green"
})

var istatus=document.querySelector("h5")

var rem=document.querySelector("#remove")

rem.addEventListener("click",function(){
    istatus.innerHTML="Strengers"
    istatus.style.color="red"
})
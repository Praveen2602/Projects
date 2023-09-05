var statuss=document.querySelector("h5");
var add = document.querySelector("#add");

var removefriend=document.querySelector("#remove");
add.addEventListener("click",function(){
    statuss.innerHTML="Friends"
    statuss.style.color="green"
});

removefriend.addEventListener("click",function(){
    statuss.innerHTML="Stranger"
    statuss.style.color="red"
})
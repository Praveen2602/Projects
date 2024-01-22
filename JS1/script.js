const endDate = "20 january 2024 7:44 PM"
document.getElementById("endDate").innerText = endDate;
const inputs =document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return ;
    //conver into days
    inputs[0].value=Math.floor(diff/3600/24);
    //conver into hours
    inputs[1].value=Math.floor(diff/3600)%24;
     //conver into minutes
    inputs[2].value = Math.floor(diff/60)%60;
     //conver into seconds
    inputs[3].value = Math.floor(diff)%60;
}

clock();

setInterval(()=>{
    clock()
},1000)
let xhr;
let timeZonelist;
let timezonename;
let endpoint="http://worldtimeapi.org/api/timezone";
function loadTimeZones(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("Get",endpoint,true);
    xhr.send(null);
}

function processResponse(){
    if(xhr.readyState===4 && xhr.status===200){
       let jsonStr = xhr.responseText;
       //console.log(jsonStr);
       let str = "";
       let countaryArr = JSON.parse(jsonStr);
       countaryArr.forEach((country) => {
        str+=`<option> ${country}</option>`;
       });
       timeZonelist = document.getElementById("timezone");
       timeZonelist.innerHTML = str;
    }
}
function showData(){
  timezonename =timeZonelist.value;
 //console.log(timezonename);
 let endpoint2 = endpoint+"/"+timezonename;
 xhr = new XMLHttpRequest();
 xhr.onreadystatechange=processTime;
 xhr.open("Get",endpoint2,true);
 xhr.send(null);
}
function processTime(){
    if(xhr.readyState===4 && xhr.status===200){
        let jsonStr = xhr.responseText;
        let obj = JSON.parse(jsonStr);
        let dateTime =obj.datetime;
        let today = new Date(dateTime);
        let dateStr = today.toLocaleString("en-US",{timeZone : timezonename});
        let globalDate = new Date(dateStr);
        let globalDateTimeStr = globalDate.toDateString()+","+globalDate.toLocaleTimeString();
        let span = document.getElementById("currentdatetime");
        span.innerHTML = globalDateTimeStr;
    }
}
window.onload = loadTimeZones;
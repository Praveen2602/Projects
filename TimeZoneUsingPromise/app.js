function connect(){
    let endpoint ="http://worldtimeapi.org/api/timezone/Asia/bhopal";
    let pr = load(endpoint);
    let sp = document.getElementById("currentdatetime");
    pr.then((result)=>{
      let obj = JSON.parse(result);
      let datetime = obj.datetime;
      let today = new Date(datetime);
      sp.innerHTML = today.toDateString()+","+ today.toLocaleTimeString();
    }).catch((error)=>{
        sp.innerHTML = "Sorrry ! we cannot resolve the server <br> Reason :"+ error;
    });

}
function load(url){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
        if(xhr.readyState===4&&xhr.status===200){
            resolve(xhr.responseText);
        }
        else if(xhr.readyState===4 && xhr.status!=200){
            reject(xhr.statusText);
        }
        };
      xhr.open("Get" , url , true);
      xhr.send(null);
    });
   
}
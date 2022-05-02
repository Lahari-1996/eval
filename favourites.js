// write js code here corresponding to favourites.html
var matchdata=JSON.parse(localStorage.getItem("favourites"));
displaydata(matchdata);
function displaydata(matchdata){
   
    matchdata.forEach(function(elem,index){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=elem.number;

    var td2=document.createElement("td");
    td2.innerText=elem.teamf;

    var td3=document.createElement("td");
    td3.innerText=elem.teams;

    var td4=document.createElement("td");
    td4.innerText=elem.date;

    var td5=document.createElement("td");
    td5.innerText=elem.venue;

    var td6=document.createElement("td");
    td6.innerText="Delete";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        deleteme(elem,index);
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

});
}
function deleteme(elem,index){
    var del=JSON.parse(localStorage.getItem("favourites"))
    del.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(del));
    window.location.reload();
}

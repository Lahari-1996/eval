// write js code here corresponding to matches.html
var newdata=JSON.parse(localStorage.getItem("schedule"));
var matcharray=JSON.parse(localStorage.getItem("favourites")) || [];
displaydata(newdata);
function displaydata(newdata){
newdata.forEach(elem => {
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
    td6.innerText="Add as Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        clickme(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

});
}
function clickme(){
    matcharray.push(elem);
    localStorage.setItem("favourites",JSON.stringify(matcharray));

}
function venuefilter(){
    var ven=document.querySelector("filterVenue").value;
    var venfil=matcharray.filter(function(elem)
    {
        return elem.venue==ven;
    })
    displaydata(venfil);
}
/*element that retrieves time 
element that retrieves date
element that refreshes time/date automatically
12hr/24hr toggle*/

function showTime (){
    var nao = new Date();
    var hr = nao.getHours();
    var min = nao.getMinutes();
    var sec = nao.getSeconds();
    hr = checkTime(hr)
    min = checkTime(min)
    sec = checkTime(sec)

    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec;
    var t= setTimeout(showTime, 1000)
}
showTime();
function checkTime (u) {
    if (u<10) {
        u = "0" + u
    }
    return u;
}
function showDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    dd = checkDate(dd)
    mm = checkDate(mm + 1)
    yyyy = checkDate(yyyy)

    document.getElementById("date").innerHTML = mm + "/" + dd + "/" + yyyy;
}
function checkDate(d) {
    if(d<10) {
        d = "0" + d
    }
    return d;
}
showDate();

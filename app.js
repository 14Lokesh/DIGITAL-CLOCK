function updatetime(){
    var date= new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var am_pm = document.getElementById("am-pm");

    if(hours>=12)
    {
        am_pm.innerHTML= "PM";
    }
    else
    {
        am_pm.innerHTML= "AM";
    }


    if(hours>12)
    {
        hours= hours -12;
    }

    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;


}
    setInterval(updatetime,1000);

function print()
{
    window.print();
}


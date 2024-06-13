var second = 0;
var minute = 0;
var hour= 0;
var date = new Date() ;

setInterval(
    function(){
        date = new Date();
        second = date.getSeconds();
        minute = date.getMinutes();
        hour = date.getHours();
        let secondDegree = (second*6);
        let minuteDegree = (minute*6)+ Math.round(second/60);
        let hourDegree = (hour*30)+Math.round(minute/12);
        document.getElementById("secondHand").style.transform = `rotate(${secondDegree}deg)`;
        document.getElementById("minuteHand").style.transform = `rotate(${minuteDegree}deg)`;
        document.getElementById("hourHand").style.transform = `rotate(${hourDegree}deg)`;

    }, 1000
);
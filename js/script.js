const countDownDate = new Date('December 31, 2022 23:59:59');

var x = setInterval(function () {
    var now = new Date();

    var distance = countDownDate - now

    var dia = now.getDate();           
    var dia_sem = now.getDay();        
    var mes = now.getMonth();          
    var ano2 = now.getYear();          
    var ano4 = now.getFullYear();      
    var hora = now.getHours();          
    var min = now.getMinutes();        
    var seg = now.getSeconds();        
    var mseg = now.getMilliseconds();   
    var tz = now.getTimezoneOffset(); 

    //Imprimindo dias e  horas restantes 
    var diasRestante = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("diasRestantes").innerHTML = `${diasRestante} `
    document.getElementById("horasRestantes").innerHTML = ` ${hours}`;
    document.getElementById("minutosRestantes").innerHTML = `${minutes}`;
    document.getElementById("secondsRestantes").innerHTML = `${seconds}`;


    document.getElementById("diaNow").innerText = ` Hoje é dia:  ${dia}/${mes + 1}/${ano4}`;

}, 1000)










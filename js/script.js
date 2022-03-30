const countDownDate = new Date('December 31, 2022 23:59:59');

// console.log('Contagem', countDownDate.getTime());

var x = setInterval(function () {
    var now = new Date();

    var distance = countDownDate - now

    // console.log('Dias restantes', distance);

    
    //Imprimindo dias de hoje
    var dia = now.getDate();           // 1-31
    var dia_sem = now.getDay();            // 0-6 (zero=domingo)
    var mes = now.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = now.getYear();           // 2 dígitos
    var ano4 = now.getFullYear();       // 4 dígitos
    var hora = now.getHours();          // 0-23
    var min = now.getMinutes();        // 0-59
    var seg = now.getSeconds();        // 0-59
    var mseg = now.getMilliseconds();   // 0-999
    var tz = now.getTimezoneOffset(); // em minutos


    //Imprimindo horas restantes 
    var diasRestante = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log('Testando hora', hours);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("dia").innerText = ` Hoje é dia:  ${dia}/${mes + 1}/${ano4}`;
    document.getElementById("horas").innerHTML = ` Faltam: ${hours}:${minutes}:${seconds} `;
    document.getElementById("dias").innerHTML = `E faltam ${diasRestante} dias para o genocida do bolsonaro sair do poder!!!`

}, 1000)










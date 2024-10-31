const pics_src = ["esp.img/keihin.png","esp.img/nasi-san.png","esp.img/dukuri.png","esp.img/tank1.png"];
let num = -1;

function slideshow_timer(){
    if (num === 3){
        num = 0;
    }
    else{
    num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 2000)

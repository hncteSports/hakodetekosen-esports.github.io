const pics_src = ["esp.img/apex.jpg","esp.img/tank.jpg","esp.img/tetolis.jpg"];
let num = -1;

function slideshow_timer(){
    if (num === 2){
        num = 0;
    }
    else{
    num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 2000)
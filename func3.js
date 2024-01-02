'use strict';

function bigImg(e){
    var img = document.getElementById(e);
    const currentWid = img.clientWidth;
    if(currentWid == 400){
        img.style.width = 700 + 'px';
        img.style.height = 700 + 'px';
    }
    else{
        img.style.width = 400 + 'px';
        img.style.height = 400 + 'px'
    }
}
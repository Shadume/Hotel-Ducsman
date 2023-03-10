let img = document.getElementById('img');
const slides = ["2.jpg", "3.jpg"];
let num = 0;

function slide() {
    if(num<slides.length){
        num++;
    }
    else{
        num=1;
    }
    console.log(img);
    img.innerHTML = "<img src='images/slider/"+slides[num-1]+"'>";
}

setInterval(slide, 3000);
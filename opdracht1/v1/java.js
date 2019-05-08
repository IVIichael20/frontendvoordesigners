var VisibleBlue, VisibleYellow, VisibleGreen, VisibleRed;
var document;

document.querySelector("#blue").addEventListener("click", VisibleBlue);
document.querySelector("#yellow").addEventListener("click", VisibleYellow);
document.querySelector("#green").addEventListener("click", VisibleGreen);
document.querySelector("#red").addEventListener("click", VisibleRed);

/*Versie 1*/
/*function VisibleBlue() {
    document.querySelector("#kaderblue").classList.add("blueclass");
    document.querySelector("#kaderblue").classList.remove("kaderblue");

    document.querySelector("#kaderyellow").classList.remove("yellowclass");
    document.querySelector("#kaderyellow").classList.add("kaderyellow");

}

function VisibleYellow() {
    document.querySelector("#kaderyellow").classList.add("yellowclass");
    document.querySelector("#kaderyellow").classList.remove("kaderyellow");

    document.querySelector("#kaderblue").classList.remove("blueclass");
    document.querySelector("#kaderblue").classList.add("kaderblue");
}*/

function VisibleBlue() {
    document.querySelector("#img1").src = 'images/blue_01.jpg';
    document.querySelector("#img2").src = 'images/blue_02.jpg';
    document.querySelector("#img3").src = 'images/blue_03.jpg';
    document.querySelector("#img4").src = 'images/blue_04.jpg';
    document.querySelector("#img5").src = 'images/blue_05.jpg';
    document.querySelector("#img6").src = 'images/blue_06.png';
}

function VisibleYellow() {
    document.querySelector("#img1").src = 'images/yellow_01.jpg';
    document.querySelector("#img2").src = 'images/yellow_02.jpg';
    document.querySelector("#img3").src = 'images/yellow_03.jpg';
    document.querySelector("#img4").src = 'images/yellow_04.jpg';
    document.querySelector("#img5").src = 'images/yellow_05.jpeg';
    document.querySelector("#img6").src = 'images/yellow_06.jpg';
}

function VisibleGreen() {
    document.querySelector("#img1").src = 'images/green_01.jpg';
    document.querySelector("#img2").src = 'images/green_02.jpg';
    document.querySelector("#img3").src = 'images/green_03.jpg';
    document.querySelector("#img4").src = 'images/green_04.jpg';
    document.querySelector("#img5").src = 'images/green_05.jpg';
    document.querySelector("#img6").src = 'images/green_06.jpg';
}

function VisibleRed() {
    document.querySelector("#img1").src = 'images/red_01.jpg';
    document.querySelector("#img2").src = 'images/red_02.jpg';
    document.querySelector("#img3").src = 'images/red_03.jpg';
    document.querySelector("#img4").src = 'images/red_04.jpg';
    document.querySelector("#img5").src = 'images/red_05.jpg';
    document.querySelector("#img6").src = 'images/red_06.jpg';
}

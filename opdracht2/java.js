var document;

/* Button omlaag en keycode S */
document.getElementById("omlaag").addEventListener("click", Omlaag);
var x = 0;

function Omlaag() {
    x = x + 20;
    document.getElementById("cirkel").style.marginTop = x + "px";

    if (y == 1260 && x == 260) {
        alert("Gefeliciteerd! Je hebt de schat gevonden!");
    }

}
document.addEventListener('keydown', function keyCode(e) {
    if (e.keyCode == '83') {
        x = x + 20;

        document.getElementById("cirkel").style.marginTop = x + "px";
        if (y == 1260 && x == 260) {
            alert("Gefeliciteerd! Je hebt de schat gevonden!");
        }

    }
});


/* Button rechts en keycode D */

document.getElementById("rechts").addEventListener("click", Rechts);
var y = 0;

function Rechts() {
    y = y + 20;

    document.getElementById("cirkel").style.marginLeft = y + "px";
    if (y == 1260 && x == 260) {
        alert("Gefeliciteerd! Je hebt de schat gevonden!");
    }

}

document.addEventListener('keydown', function keyCode(e) {
    if (e.keyCode == '68') {
        y = y + 20;

        document.getElementById("cirkel").style.marginLeft = y + "px";
        if (y == 1260 && x == 260) {
            alert("Gefeliciteerd! Je hebt de schat gevonden!");
        }

    }
});



/* Button links en keycode A */

document.getElementById("links").addEventListener("click", Links);
var z = 20;

function Links() {
    y = y - 20;

    document.getElementById("cirkel").style.marginLeft = y - z + "px";
    if (y == 1260 && x == 260) {
        alert("Gefeliciteerd! Je hebt de schat gevonden!");
    }

}


document.addEventListener('keydown', function keyCode(e) {
    if (e.keyCode == '65') {
        document.getElementById("cirkel").style.marginLeft = y - z + "px";
        y = y - 20;

        if (y == 1260 && x == 260) {
            alert("Gefeliciteerd! Je hebt de schat gevonden!");
        }
    }
});



/* Button omhoog en keycode W */

document.getElementById("omhoog").addEventListener("click", Omhoog);

function Omhoog() {
    x = x - 20;

    document.getElementById("cirkel").style.marginTop = x - z + "px";
    if (y == 1260 && x == 260) {
        alert("Gefeliciteerd! Je hebt de schat gevonden!");
    }

}

document.addEventListener('keydown', function keyCode(e) {
    if (e.keyCode == '87') {
        document.getElementById("cirkel").style.marginTop = x - z + "px";
        x = x - 20;

        if (y == 1260 && x == 260) {
            alert("Gefeliciteerd! Je hebt de schat gevonden!");
        }
    }
});

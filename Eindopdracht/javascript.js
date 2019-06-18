/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var y;

function movies(Json) {
    for (y = 0; y < Json.length; y++) {

        var cover = document.createElement('img');
        var image = Json[y].cover;
        cover.setAttribute("src", image);
        cover.setAttribute("class", "sectionImg")
        document.querySelector('section').appendChild(cover);

    }

    for (y = 0; y < Json.length; y++) {

        cover = document.createElement('img');
        image = Json[y].cover;
        cover.setAttribute("src", image);
        cover.setAttribute("class", "sectionImg")
        document.querySelector('section').appendChild(cover);
    }

    for (y = 0; y < Json.length; y++) {

        cover = document.createElement('img');
        image = Json[y].cover;
        cover.setAttribute("src", image);
        cover.setAttribute("class", "sectionImg")
        document.querySelector('section').appendChild(cover);
    }
    var image_remove = document.querySelector('.movie');
    image_remove.parentNode.removeChild(image_remove);

    document.addEventListener('keydown', function keyCode(e) {

        if (e.keyCode == 27) {
            var div_toggle = document.getElementById('divje');
            div_toggle.classList.toggle("divje1");

            var h3_toggle = document.getElementById('h3');
            h3_toggle.classList.toggle("h3tje");


        }
    })
}


var replacenr = 0;

function buildHTML(Json) {


    if (replacenr == 0) {

        var i = Math.floor((Math.random() * 6));
        var div = document.createElement(div);


        var h1 = document.createElement('h1');
        document.querySelector('div').appendChild(h1);
        h1.innerHTML = Json[i].title;


        var cover = document.createElement('img');
        var image = Json[i].cover;
        cover.setAttribute("src", image)
        document.querySelector('div').appendChild(cover);

        var release_date = document.createElement('p');
        document.querySelector('div').appendChild(release_date);
        release_date.innerHTML = Json[i].release_date;

        var readmore = document.createElement('p');
        document.querySelector('div').appendChild(readmore);
        readmore.innerHTML = "Read more +";
        readmore.setAttribute("class", "readmore");


        replacenr = replacenr + 1;

        var image_remove = document.querySelector('.movie');
        image_remove.parentNode.removeChild(image_remove);






    } else {

        i = Math.floor((Math.random() * 6));

        document.getElementsByTagName("h1")[1].innerHTML = Json[i].title;
        document.getElementsByTagName("img")[0].src = Json[i].cover;
        //  document.getElementsByTagName("p")[0].innerHTML = Json[a].plot;
        document.getElementsByTagName("p")[0].innerHTML = Json[i].release_date;

        document.querySelector('.readmore').innerHTML = "Read more [+]";
        document.querySelector('.h3').style.visibility = 'visible';

    }

    document.addEventListener('keydown', function keyCode(e) {
        if (e.keyCode == '187') {

            document.querySelector('.readmore').innerHTML = Json[i].plot;
        }

    });

    document.addEventListener('keydown', function keyCode(e) {

        if (e.keyCode == 82) {
            buildHTML(Json);
        }
    })

    document.addEventListener('keydown', function keyCode(e) {

        if (e.keyCode == 27) {
            var div_toggle = document.getElementById('divje');
            div_toggle.classList.toggle("divje1");

            var h3_toggle = document.getElementById('h3');
            h3_toggle.classList.toggle("h3tje");

        }
    })

}




fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (Json) {
        document.querySelector('.button').addEventListener('click', function () {
            buildHTML(Json);
        });
        document.querySelector('.button1').addEventListener('click', function () {
            movies(Json);
        });


        console.log(Json);
    })

    .catch(function (err) {
        console.log(err);
    });

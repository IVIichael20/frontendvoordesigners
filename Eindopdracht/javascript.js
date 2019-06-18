/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function movies(Json) {
    for (y = 0; y < Json.length; y++) {

        var cover = document.createElement('img');
        var image = Json[y].cover;
        cover.setAttribute("src", image);
        cover.setAttribute("class", "sectionImg")
        document.querySelector('section').appendChild(cover);



        // var h1 = document.createElement('h1');
        //  document.querySelector('section').appendChild(h1);
        // h1.innerHTML = Json[y].title;


    }


    for (y = 0; y < Json.length; y++) {

        var y;
        cover = document.createElement('img');
        image = Json[y].cover;
        cover.setAttribute("src", image);
        cover.setAttribute("class", "sectionImg")
        document.querySelector('section').appendChild(cover);



        // var h1 = document.createElement('h1');
        //  document.querySelector('section').appendChild(h1);
        // h1.innerHTML = Json[y].title;


    }

}

var replacenr = 0;

function buildHTML(Json) {

    if (replacenr == 0) {

        var i = Math.floor((Math.random() * 6));
        var div = document.createElement(div);


        var h1 = document.createElement('h1');
        document.querySelector('div').appendChild(h1);
        h1.innerHTML = Json[i].title;
        //   document.getElementsByTagName("h1")[1].setAttribute("class", )

        var cover = document.createElement('img');
        var image = Json[i].cover;
        cover.setAttribute("src", image)
        document.querySelector('div').appendChild(cover);

        /*   var plot = document.createElement('p');
           document.querySelector('div').appendChild(plot);
           plot.innerHTML = Json[i].plot;*/

        var release_date = document.createElement('p');
        document.querySelector('div').appendChild(release_date);
        release_date.innerHTML = Json[i].release_date;

        replacenr = replacenr + 1;

    } else {

        var a = Math.floor((Math.random() * 6));

        document.getElementsByTagName("h1")[1].innerHTML = Json[a].title;
        document.getElementsByTagName("img")[0].src = Json[a].cover;
        //  document.getElementsByTagName("p")[0].innerHTML = Json[a].plot;
        document.getElementsByTagName("p")[0].innerHTML = Json[a].release_date;

    }




}

fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (Json) {
        document.querySelector('.button').addEventListener('click', function () {
            buildHTML(Json);
        });
        movies(Json);

        //buildHTML(Json);

        console.log(Json);
    })

    .catch(function (err) {
        console.log(err);
    });

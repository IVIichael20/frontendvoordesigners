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



function buildHTML(Json) {
    for (i = 0; i < Json.length; i++) {

        var i = Math.floor((Math.random() * 6));
        var div = document.createElement(div);


        var h1 = document.createElement('h1');
        document.querySelector('div').appendChild(h1);
        h1.innerHTML = Json[i].title;

        var cover = document.createElement('img');
        var image = Json[i].cover;
        cover.setAttribute("src", image)
        document.querySelector('div').appendChild(cover);

        var plot = document.createElement('p');
        document.querySelector('div').appendChild(plot);
        plot.innerHTML = Json[i].plot;

        var release_date = document.createElement('p');
        document.querySelector('div').appendChild(release_date);
        release_date.innerHTML = Json[i].release_date + "  " + Json[i].genres;
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

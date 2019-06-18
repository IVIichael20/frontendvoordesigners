/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



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
        
        var readmore = document.createElement('p');
        document.querySelector('div').appendChild(readmore);
        readmore.innerHTML = "Read more +";
        readmore.setAttribute("class", "readmore");
        

        replacenr = replacenr + 1;
        
        

    } else {
        
        i = Math.floor((Math.random() * 6));

        document.getElementsByTagName("h1")[1].innerHTML = Json[i].title;
        document.getElementsByTagName("img")[0].src = Json[i].cover;
        //  document.getElementsByTagName("p")[0].innerHTML = Json[a].plot;
        document.getElementsByTagName("p")[0].innerHTML = Json[i].release_date;
        
        document.querySelector('.readmore').innerHTML = "Read more [+]";

    }

   document.addEventListener('keydown', function keyCode(e) {
        if (e.keyCode == '187') {
            
           document.querySelector('.readmore').innerHTML = Json[i].plot;
            var getal = 0;
        }

    });

}




fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (Json) {
        document.querySelector('.button').addEventListener('click', function () {
            buildHTML(Json);
        });
       //movies(Json);

        //buildHTML(Json);

        console.log(Json);
    })

    .catch(function (err) {
        console.log(err);
    });

var mioJSON = {
    messaggi: [
        {
            id: 1,
            immagine_utente: { url: "user.jpg" },
            utente: "Paolo",
            testo: "ciao, sono Paolo",

            immagini_messaggio: [
                     {
                        url:"play.png",
                        descrizione: "foto1 - p"
                     },
                     {
                        url:"play.png",
                        descrizione: "foto2 - p"
                    },
                    {
                        url:"play.png",
                        descrizione: "foto3 - p"
                    },
            ],



            descrizione_utente: "sono nato nel 1991."
        },
        {
            id: 2,
            immagine_utente: { url: "user.jpg" },
            utente: "Alessandro",
            testo: "ciao, sono Alessandro",
           
            immagini_messaggio: [
                 {
                        url:"play.png",
                        descrizione: "foto1 - a"
                    },
                {
                        url:"play.png",
                        descrizione: "foto2 - a"
                    },
                {
                        url:"play.png",
                        descrizione: "foto3 - a"
                    },
            ],
            descrizione_utente: "sono nato nel 1980."
        },
        {
            id: 3,
            immagine_utente: { url: "user.jpg" },
            utente: "Francesco",
            testo: "ciao, sono Francesco",
           
            immagini_messaggio: [
                {
                        url:"play.png",
                        descrizione: "foto1 - f"
                    },
                {
                        url:"play.png",
                        descrizione: "foto2 - f"
                    },
                {
                        url:"play.png",
                        descrizione: "foto3 - f"
                    },
            ],
            descrizione_utente: "sono nato nel 1970."
        },
        {
            id: 4,
            immagine_utente: { url: "user.jpg" },
            utente: "Gino",
            testo: "ciao, sono Gino",

            immagini_messaggio: [
                     {
                         url: "play.png",
                         descrizione: "foto1 - g"
                     },
                    {
                        url: "play.png",
                        descrizione: "foto2 - g"
                    },
                    {
                        url: "play.png",
                        descrizione: "foto3 - g"
                    },
            ],
            descrizione_utente: "sono nato nel 1990."
        },
        {
            id: 5,
            immagine_utente: { url: "user.jpg" },
            utente: "Mario",
            testo: "ciao, sono Mario",

            immagini_messaggio: [
                     {
                         url: "play.png",
                         descrizione: "foto1 - m"
                     },
                    {
                        url: "play.png",
                        descrizione: "foto2 - m"
                    },
                    {
                        url: "play.png",
                        descrizione: "foto3 - m"
                    },
            ],
            descrizione_utente: "sono nato nel 1960."
        },

    ]
}


/* funzioni */

function printUsers() {
    console.log("sto caricando.");
    for (i = 0 ; i < mioJSON.messaggi.length; i++) {
        var str = '<div class="msg">' + ' <div class="user">' +
            ' <img src="'+ mioJSON.messaggi[i].immagine_utente.url +
            '" id="user_image" class="user_image"/>' + '</div> <div class="from_text">' +
                 '<h4 id="user">' + mioJSON.messaggi[i].utente + '</h4><p id="text_message">' +
                 mioJSON.messaggi[i].testo + '</p> </div><div class="details">' +
                 '<a class="button" onclick="showMessage(' + i + ')">dettagli</a></div></div>';
        document.getElementById("messages").innerHTML += str;
    }

}


function showMessage(id) {
    console.log("sto per mostrare il messaggio.");
    var w = screen.availWidth;
    var h = screen.availHeight;

    if (w > 780) {
        console.log("width: " + w);
        document.getElementById("cont").style.display = 'none';

        if (document.getElementById("cont").style.display === 'none') {

            document.getElementById("cont").style.display = 'block';
            console.log(id);

            var nome = "";
            var descr = "";

            nome = mioJSON.messaggi[id].utente;
            descr = mioJSON.messaggi[id].descrizione_utente;
            dim = mioJSON.messaggi[id].immagini_messaggio.length;
            console.log(dim);
            var img = [];
            var str = "";

            document.getElementById("nome").innerHTML = "";
            document.getElementById("descrizione").innerHTML = "";
            document.getElementById("images").innerHTML = "";
            document.getElementById("descrizione_immagine").innerHTML = "";

            for (k = 0; k < dim; k++) {
                img[k] = mioJSON.messaggi[id].immagini_messaggio[k].url;
                console.log(k);
                console.log(img[k]);
                str = '<img src="' + img[k] + '" class="bording" onclick="open_description(' + id + ',' + k + ')"   />';
                document.getElementById("images").innerHTML += str;
            }

            document.getElementById("nome").innerHTML = nome;
            document.getElementById("descrizione").innerHTML = descr;
        } else {

            document.getElementById("cont").style.display = 'none';
        }
    } else if (w <= 780) {
        console.log("width: " + w);
        document.getElementById("prova").style.display = 'none';



        if (document.getElementById("prova").style.display === 'none') {
            document.getElementById("inbox").style.display = 'none';
            console.log("ss: " + h);
            document.getElementById("prova").style.display = 'block';
            document.getElementById("cont").style.display = 'block';

            console.log(id);

            var a = document.getElementsByClassName("inbox_details")[0];
            console.log(a);

            document.getElementById("prova").style.minHeight = h +"px";
            
            /*creazione del bottone indietro.*/
            var btn = document.createElement("button");
            document.body.appendChild(btn);
            btn.textContent = "indietro";
            btn.style.position = "absolute";
            btn.style.margin = "10px";
            btn.style.border = "none";
            btn.style.color = "white";
            btn.style.borderRadius = "10px";
            btn.style.fontFamily = "Bookman Old Style";
            btn.style.fontSize = "15px";
            btn.style.backgroundColor = "Highlight";
            btn.onclick = function () {
                document.getElementById("prova").style.display = "none";
                document.getElementById("inbox").style.display = "block";
                btn.remove();
            }


            /*caricamento contenuti messaggio */
            var nome = "";
            var descr = "";

            nome = mioJSON.messaggi[id].utente;
            descr = mioJSON.messaggi[id].descrizione_utente;
            dim = mioJSON.messaggi[id].immagini_messaggio.length;
            console.log(dim);
            var img = [];
            var str = "";

            document.getElementById("nome").innerHTML = "";
            document.getElementById("descrizione").innerHTML = "";
            document.getElementById("images").innerHTML = "";
            document.getElementById("descrizione_immagine").innerHTML = "";



            for (k = 0; k < dim; k++) {
                img[k] = mioJSON.messaggi[id].immagini_messaggio[k].url;
                console.log(k);
                console.log(img[k]);
                str = '<a ><img src="' + img[k] + '" class="bording" onclick="open_description(' + id + ',' + k + ')"   /></a>';
                document.getElementById("images").innerHTML += str;
            }

            document.getElementById("nome").innerHTML = nome;
            document.getElementById("descrizione").innerHTML = descr;


        } else {

            document.getElementById("cont").style.display = 'none';
        }
    }

       
   
}

function open_description(id, img) {

    console.log("id" + id);
    console.log("img" + img);
    var descr = "";


    descr= mioJSON.messaggi[id].immagini_messaggio[img].descrizione;
    console.log(descr);
    
    document.getElementById("descrizione_immagine").innerHTML = descr;
}


function prova() {
    var dim = mioJSON.messaggi[1].immagini_messaggio.length;
    console.log("dimensione:" + dim);

    var str = "";

    for (var i = 0; i < dim; i++) {
        str = "<div class='immagine'><div class='prev' onclick='prev(" + i + ")'> prima </div><img src='" + mioJSON.messaggi[1].immagini_messaggio[i].url + "' /><div class='next' onclick='next(" + i + ")'> prima </div></div>";
        document.getElementById("ciao").innerHTML += str;
    }
}




var provaJSON = {
    img: [
        {
            url: "sfondo.jpg",
            descrizione: "foto sfondo 1",
        },
        {
            url: "play.png",
            descrizione: "foto 2",
        },
        {
            url: "user.jpg",
            descrizione: "foto 3",
        }
    ],
}


function mostra() {
   // var prevS = '<div class="prev" onclick="ciao(' + document.getElementById('"prev"') + ',' + i + ')" id="next"> prima </div>' ;
   // var nextS = "<div class='next' onclick= ciao(" + document.getElementById('next') + "," + i + ") id='next'>dopo</div>";
    var str = "";
    var prevS = "";
    var nextS = "";
    for (var i = 0; i < provaJSON.img.length; i++) {
        console.log(i + " " + provaJSON.img[i].url);

        str = "<img src='" + provaJSON.img[i].url + "'  class='immagine' id='" + i + "'/>";
        prevS = '<div class="prev" onclick="prev(' + i + ')" id="next"> prima </div>';
        nextS = "<div class='next' onclick= next(" + i + ") id='next'> dopo </div>";
        document.getElementById("slide").innerHTML += str + prevS + nextS;

     }

}



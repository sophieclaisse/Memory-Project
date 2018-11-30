
function jeu (recto, verso , titre){  // create objects
    this.recto= recto;
    this.verso= verso;
    this.titre= titre;
}

var Tab= []; //object Tab with all original images, with back face, front face and Identity

Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Abeille.png","Abeille"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Abeille.png","Abeille"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Chat.jpg","Chat"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Chat.jpg","Chat"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Coq.png","Coq"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Coq.png","Coq"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Girafe.png","Girafe"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Girafe.png","Girafe"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Lion.png","Lion"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Lion.png","Lion"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Pingouin.png","Pingouin"));
Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Pingouin.png","Pingouin"));
//console.log(Tab);


var Tab2= []; //Tab to push the objects with random order

var rand;

//INITIATE () FUNCTION RUNS FOR ALL GAME
function Initiate () {

    var TabEvent= []; //Tab to push and stock the two clicked images identity (for next comparison)



//RANDOM FUNCTION
    function randomNumber(maxLength) {
        return Math.floor(Math.random() * maxLength);
    }


//FUNCTION  TO PUT RANDOM IN A NEW TAB WITHOUT DUPLICATES CHOICES
    function shuffle(param) {
        for (let i = 0; i < param.length; i++) {
            rand = randomNumber(param.length);
            if (Tab2.indexOf(param[rand]) === -1)// IF DOESN'T EXISTS IN TAB2 PUSH
            {
                Tab2.push(param[rand]);
            } else { // IF EXISTS IN TAB2 DON'T PUSH A DUPLICATE CHOICE
                i--;
            }
        }

        return Tab2;
    }

    shuffle(Tab);

    console.log(Tab2);



// FUNCTION TO START THE GAME - create img "recto"
    function start() {

        document.getElementById("play").addEventListener("click", function () {//Event click play button to start the game

            game(); // Function called to show/create images on html
            document.getElementById("play").disabled = true;
        });
    }

    start();



//FUNCTION PLAY - EVENT- see img "verso"

var test=2; // clicks numbers to limit - decrease when user click on img
var total=0;

function playGame() {

        var cartes = document.getElementsByClassName("carte");

        for (var x = 0; x < cartes.length; x++) {

            var face= Tab2[x].recto;
            //console.log(face);


            cartes[x].addEventListener("click", function (e) {//Event to return "cards"

                //console.log(e.target);

                if (e.target != TabEvent[0]){ // to be sure that second target is diferent from first
                TabEvent.push(e.target);// To push target in Tab Event
                //console.log(TabEvent);
                e.target.src = e.target.name; //change image from back to front (faces)
                test--;
                }

    if(TabEvent[1] && TabEvent[0]) {// To define two answers pushed in TabEvent to do comparisons
        if (TabEvent[0].id != TabEvent[1].id) {

            if (test == 0 && TabEvent[0].title == TabEvent[1].title) { //Win system: when user founds two equals cards

                TabEvent[0].style.visibility = "hidden";//to hide image1 if two cards equals
                e.target.style.visibility = "hidden";//to hide image2 if two cards equals

                test = 2;
                TabEvent = [];// To empty Tab2
                // console.log(TabEvent);
                total++;
                //console.log(total);

                if (total == 6) { // Win system : when user founds all cards
                    document.getElementById("modal").style.top = "160px";
                    test = 2;
                    reset();//call function to begin new game

                }

            }

            if (test == 0 && TabEvent[0].title != TabEvent[1].title) { // loose

                setTimeout(function () { //show two cards 1sc
                    TabEvent[0].src = face;
                    e.target.src = face;
                    TabEvent = [];
                    test = 2;
                }, 1000);

            }


            if (test < 0) {// To limit two clicks on cards
                e.target.src = face;
            }

        }
    }
            });
        }
//console.log(test);
}
playGame();




function game () { //To create img from Tab2 to page (with attributes)
    for (var j = 0; j < Tab2.length; j++) {

        document.getElementById("jeu" + [j]).innerHTML= "";

        var container = document.getElementById("jeu" + [j]);//container = all <div> called "jeu" +number



        var img = document.createElement("img");//Create IMG with img recto from Tab2
        img.className = "image";
        img.src = Tab2[j].recto;

        img.setAttribute("face",Tab2[j].recto);
        img.name = Tab2[j].verso;
        img.title = Tab2[j].titre;


        img.setAttribute("id",[j]);
        container.appendChild(img);
        //console.log(img);
    }
}

    function reset(){ // Reset all game

        document.getElementById("rejouer").addEventListener("click", function (){


            document.getElementById("modal").style.top = "-1000px";//To show POP UP

            document.getElementById("play").disabled = false; //play button : On

            Tab2= [];//EMPTY Tab2

            //console.log(Tab2);

            Initiate(); // When pop up dispear, new game begin

        });

    }



}
Initiate();







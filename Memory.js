
function jeu (recto, verso , titre){
    this.recto= recto;
    this.verso= verso;
    this.titre= titre;
}

var Tab= [];

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


var Tab2= [];


var TabEvent= [];

var rand;

//RANDOM FUNCTION
function randomNumber(maxLength){
    return Math.floor(Math.random() * maxLength);
}

//FUNCTION  TO PUT RANDOM IN A NEW TAB WITHOUT DUPLICATES CHOICES
function shuffle(param){
    for (let i = 0; i < param.length; i++)
    {
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
function start () {

    document.getElementById("play").addEventListener("click", function () {

        game();
        document.getElementById("play").disabled = true;
    });
}
start();

//FUNCTION PLAY - EVENT- see img "verso"


var test=2;


function playGame() {

        var cartes = document.getElementsByClassName("carte");



        for (var x = 0; x < cartes.length; x++) {

            var face= Tab2[x].recto;
            console.log(face);

            cartes[x].addEventListener("click", function (e) {

                console.log(e.target);


                TabEvent.push(e.target);
                //console.log(TabEvent);

                e.target.src = e.target.name;//CIBLE SOURCE IMG = CIBLE


                test--;


                if (test==0 && TabEvent[0].title== TabEvent[1].title ){ //WIN

                    TabEvent[0].style.visibility= "hidden";
                    e.target.style.visibility="hidden";

                    test=2;
                    TabEvent=[];
                }

                if (test==0 && TabEvent[0].title != TabEvent[1].title ) { // loose

                    setTimeout (function () { //show two cards 1,5sc
                        TabEvent[0].src = face;
                        e.target.src= face;
                        TabEvent=[];
                        test=2;
                    },1500);

                }
            });
        }

}
playGame();



function game () {
    for (var j = 0; j < Tab2.length; j++) {

        var container = document.getElementById("jeu" + [j]);//CONTAINER = ALL DIV NAMED "JEU"

        var img = document.createElement("img");//CREATE IMG WITH IMAGE RECTO FROM TAB2
        img.className = "image";
        img.src = Tab2[j].recto;

        //img.face = Tab2[j].recto;
        img.setAttribute("face",Tab2[j].recto);
        img.name = Tab2[j].verso;
        img.title = Tab2[j].titre;

        container.appendChild(img);//SHOW IMG  IN HTML
    }
}

/*function reset (){
    document.getElementById("reset").addEventListener("click", function (){
        document.getElementById("play").disabled = false;
        shuffle(Tab);
        playGame();
    });
}
*/





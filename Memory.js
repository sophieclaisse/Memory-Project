
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
        if (Tab2.indexOf(param[rand]) === -1)
        {
            Tab2.push(param[rand]);
        } else {
            i--;
        }
    }

    return Tab2;
}

shuffle(Tab);

//console.log(Tab2);


// FUNCTION TO START THE GAME - create img "recto"
function start () {

    document.getElementById("play").addEventListener("click", function () {

        for (var j = 0; j < Tab2.length; j++) {
            var container = document.getElementById("jeu" + [j]);

            var img = document.createElement("img");
            img.className = "image";
            img.src = Tab2[j].recto;

            img.name = Tab2[j].verso;
            img.title = Tab2[j].titre;

            container.appendChild(img);


        }
        document.getElementById("play").disabled = true;
    });
}
start();

//FUNCTION PLAY - EVENT- see img "verso"
var result= 0;

var test=2;
function playGame() {

        var cartes = document.getElementsByClassName("carte");

        for (var x = 0; x < cartes.length; x++) {
            cartes[x].addEventListener("click", function (e) {
                //console.log(e.target);

                e.target.src = e.target.name;

                result= e.target.title;//reaction
                TabEvent.push(result);
                //console.log(TabEvent);
                test--;
                console.log(test);

                if (test==0 && TabEvent[0]== TabEvent[1] ){
                    alert ("gagné");

                }
                if (test==0 && TabEvent[0]!= TabEvent[1] ) {
                    alert ("perdu");

                }
            });
        }

}
playGame();







/*while (TabEvent.length>0 && TabEvent.length<2){

                   if (Tab[0]== TabEvent[1] && Tab[0]!=0){
                       alert ("gagné");
                   }

                   if (TabEvent[0]!= TabEvent[1] && TabEvent[1]!=0){
                       alert ("perdu");
                       e.target.src= img.src;

                   }
               }*/

/*for (var y=0; y<=2); y++){

    if (TabEvent[0].result==TabEvent[1]){
        alert ("gagné");
    }
    else {
        alert ("perdu");
    }
}*/


/*function reset (){

    document.getElementById("reset").addEventListener("click", function (){

        shuffle(Tab);
        playGame();


    });
}
*/





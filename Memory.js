
function jeu (recto, verso , titre){
    this.recto= recto;
    this.verso= verso;
    this.titre= titre;
}

var Tab= [];

var vis1= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Abeille.png","Abeille"));
var vis2= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Abeille.png","Abeille"));
var vis3= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Chat.jpg","Chat"));
var vis4= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Chat.jpg","Chat"));
var vis5= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Coq.png","Coq"));
var vis6= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Coq.png","Coq"));
var vis7= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Girafe.png","Girafe"));
var vis8= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Girafe.png","Girafe"));
var vis9= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Lion.png","Lion"));
var vis10= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Lion.png","Lion"));
var vis11= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Pingouin.png","Pingouin"));
var vis12= Tab.push(new jeu("VISUELS/Face.jpg","VISUELS/Pingouin.png","Pingouin"));
console.log(Tab);

//UPLOAD FUNCTION
/*function base () {
    for (var i = 0; i <= Tab.length; i++) {
        document.getElementById("jeu").innerHTML += '<img id="image" src="' + Tab[i].recto + '" />';

    }
}
base();
*/

var Tab2= [];

// TO START THE GAME : RANDOM FUNCTION TO CHOOSE EACH ELEMENT PLACE AND EVENT CLICK


document.getElementById("play").addEventListener("click", function () {

   // var random =  Math.round(Math.random()* 11)= [i];
   // console.log(random);

    for (var i = 0; i <=11; i++) {

        var random = Math.round(Math.random() * 11);
        console.log(random);

        document.getElementById("jeu").innerHTML+=  '<img id="image" src="' + Tab[random].recto + '" />'

    }

});




// document.getElementById("jeu").innerHTML += '<img id="image" src="' + Tab[random].verso + '" />';









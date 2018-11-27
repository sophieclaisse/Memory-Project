
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

//UPLOAD FUNCTION
/*function base () {
    for (var i = 0; i <= Tab.length; i++) {
        document.getElementById("jeu").innerHTML += '<img id="image" src="' + Tab[i].recto + '" />';

    }
}
base();
*/

var Tab2= [];

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

console.log(Tab2);


// TO START THE GAME - create img "recto"
document.getElementById("play").addEventListener("click", function () {

    for (var j=0; j<Tab2.length; j++) {
       var container= document.getElementById("jeu"+[j]);

        var img = document.createElement("img");
        img.className= "image";
        img.src= Tab2[j].recto;

        img.title=Tab2[j].verso;

        container.appendChild(img);


    }
    document.getElementById("play").disabled= true;
});


//EVENT- see img "verso"
var cartes= document.getElementsByClassName("carte");

for (var x=0; x<cartes.length; x++) {
    cartes[x].addEventListener("click", function (e) {
       console.log(e.target);

       e.target.src= e.target.title;

       //e.target.innerHTML = '<img class="image" src="' + Tab2[x].recto + '" />';

    });

}










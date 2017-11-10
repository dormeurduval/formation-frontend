var Personne = function(nom,prenom,pseudo){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=pseudo;

    this.getNomComplet=function(){
        return this.nom + " "+this.prenom+" "+this.pseudo;
    }

    this.getInitial=function(){
        return this.prenom.charAt(0)+this.nom.charAt(0);
    }
}

var Jules = new Personne("Jules","LEMAIRE","jules77");
var Paul = new Personne("Paul","LEMAIRE","paul44");

function afficherPersonne(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(Jules);
afficherPersonne(Paul);

Jules.pseudo="jules44";
afficherPersonne(Jules);
Personne.prototype.age="NON RENSEIGNEE";
console.log(Jules.age);
Jules.age=30;
console.log(Jules.age);
console.log(Jules.getInitial());

var Robert = {
    nom:"Robert",
    prenom:"LEPREFET",
    pseudo:"robert77",

    getNomComplet:function(){
        return this.nom + " "+this.prenom+" "+this.pseudo;
    }
};

console.log(afficherPersonne(Robert));

var Client = function(nom,prenom,pseudo,numeroClient){
    Person.call(this,nom,prenom,pseudo)
    this.numeroClient=numeroClient;

    this.getInfos=function(){
        return this.numeroClient + " ";
    }
}

var steve= new Client("LUCAS","Steve","steve44","A01");
console.log(steve.getInfos());
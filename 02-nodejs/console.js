const readline = require('readline')
var listes = require("./service");

var menu=
    "1. Liste de tous les présentateurs"+"\n"+
    "2. Top présentateurs "+"\n"+
    "3. Liste des sessions"+"\n"+
    "4. Détail d'une session"+"\n";

var line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



var recursiveAsyncReadLine = function () {
    line.question(menu,function (answer) {
    
        if (answer == "exit") //we need some base case, for recursion
            return line.close(); //closing RL and returning from function.
        else if(answer=="1"){
                listes.listerTousLesPresentateurs().forEach(function(element) {
                    console.log(element.firstname+" "+element.lastname+"\n");
                });
        }

        else if(answer=="2"){
            listes.listerTopPresentateurs().forEach(function(element) {
                console.log(element.firstname+" "+element.lastname+"\n");
            });
        }

        else if(answer=="3"){
                listes.listerToutesLesSessions().forEach(function(element) {
                    console.log(element.title+"\n");
                });
        }

        else if(answer=="4"){
            line.question("Entrez un id\n",function (answerbis) {
                listes.trouverUneSession(answerbis).forEach(function(element) {
                    console.log(element.desc+" "+element.speakers);
                });
                recursiveAsyncReadLine();
            });
        }


        recursiveAsyncReadLine(); //Calling this function again to ask new question
    })
}
  
recursiveAsyncReadLine();

/*
line.on(function(line){
    if(line=="1"){
        listes.listerTousLesPresentateurs().forEach(function(element) {
            console.log(element.firstname+" "+element.lastname+"\n");
        });
    }
    else if("2"){
        listes.listerTopPresentateurs().forEach(function(element) {
            console.log(element.firstname+" "+element.lastname+"\n");
        });
    }
});
*/


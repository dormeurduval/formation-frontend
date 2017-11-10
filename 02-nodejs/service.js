var data = require("./data/devfest-2015");

module.exports = {
    listerTousLesPresentateurs:function (){
        return data.speakers;
    },

    listerToutesLesSessions:function(){
        return data.sessions;
    },

    trouverUneSession:function(idSession){
        return data.sessions.filter(function(elt){
            return elt.id==idSession;
        })
    },

    listerTopPresentateurs:function(){
        return data.speakers.filter(function(elt){
            return elt.topspeaker==true;
        })
    }
}


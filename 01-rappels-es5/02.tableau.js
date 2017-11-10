var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(elt){console.log(elt)});
console.log(villes.every(function(elt){return elt.includes("a")})==true);
console.log(villes.some(function(elt){return elt.includes("-")})==true);
villesSansTiretSansEspace= (villes.filter(function(elt){return !elt.includes(" ") && !elt.includes("-")}));
console.log(villesSansTiretSansEspace);
villesMajusculeSeTerminantParS = (villes.filter(function(elt){return elt.charAt(elt.length-1)=="s"}));
villesMajusculeSeTerminantParS = (villesMajusculeSeTerminantParS.map(function(elt){return elt.toUpperCase()}));
console.log(villesMajusculeSeTerminantParS);

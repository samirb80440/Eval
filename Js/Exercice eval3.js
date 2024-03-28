var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom=prompt("Veuillez le prenom soushaiter")
supp=tab.indexOf(prenom)
 if (sup==-1){
    alert('erreur')
 }
 if(supp>=0){
    tab.slice(sup,1)
    tab.push("")
 }
 console.log(supp)
 console.log(tab)
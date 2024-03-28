var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom=prompt("Veuillez le prenom souhaité")
supp=tab.indexOf(prenom)
 if (supp==-1){
    alert('erreur')
 }
 if(supp>=0){
    tab.splice(supp,1)
    tab.push("")
 }
 console.log(supp)
 console.log(tab)

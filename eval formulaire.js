function verif(){
    caract=document.getElementById("nom").value
    ListeCaract=new RegExp("^[A-Za-z]")
    ListeCodepost=new RegExp("^([0-9]{5})*$")
    ListeEmail=new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$")
    ListeNaissance=new RegExp("^[0-9]+\/[0-9]+\/[0-9]+$")
    test= ListeCaract.test(caract)
    if (caract ==false){
        alert("Entrez votre nom")
    }
    caract=document.getElementById("prenom").value
    test=ListeCaract.test(caract)
    if(caract==false){
        alert("entrez votre prenom")
    }
    Datenaissance=document.getElementById("date").value
    test2=ListeNaissance.test(Datenaissance)
    if(Datenaissance==false){
        alert("Entrez votre date de naissance")
    }
    codepost=document.getElementById("Codepostal").value
    test3=ListeCodepost.test(codepost)
    if(codepost==false){
        alert("Entrez votre code postal")
    }
    Email=document.getElementById("Email").value
    test4=ListeEmail.test(Email)
    if(Email==false){
        alert("Entrez votre email")
    }
    caract=document.getElementById("VotreQuestion")
    test=ListeCaract.test(caract)
    if(caract==false){
        alert("entre votre question")
    }
    }
const re=document.getElementById("sujet1")
const Sujetelement=document.getElementById("Sujet")

Sujetelement.addEventListener("change",() => {
    re.remove("sujet1")
})






















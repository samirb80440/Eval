var age=0,vieux=0,moyens=0,jeune=0

while(age!==100){
age=prompt("Ecrire votre age")
console.log(age)
if(age>=99)
{
 vieux++;break
}
if (age<20)
{
    jeune++
}
 if(age>19 && age<41)
{
     moyens++
}
if (age>=40){
    
    vieux++

}
}
console.log("le nombre de personne agé est : "+vieux)
console.log("le nombre de personne dans la moyenne d'age est :"+moyens)
console.log("le nombre de personne jeune est :"+jeune)

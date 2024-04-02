var PU,QTECOM,PAP=0,REM=0,PORT,TOT=0
PU=prompt(" saisie du prix unitaire")
 QTECOM=prompt("saisie de la quantité commandée")
 TOT= PU * QTECOM
 PAP=TOT
 if(TOT>100 && TOT<=200){
  REM=((+TOT/100)*5)
  REM=Math.round(REM*100)/100
  PAP=TOT - REM
 }
else if(TOT>200){
    REM=((+TOT/100)*10)
    REM=Math.round(REM*100)/100
    PAP=TOT - REM
}
if(PAP<=300){
    PORT=6
    PAP=+PAP + +PORT
}
else if(PAP>300 && PAP<500){
    PORT=((+PAP/100)*2)
    PORT=Math.round(PORT * 100)/100
    PAP=PAP+ +PORT
}
else if(PAP>500){
    PORT="Gratuit"
}
console.log("Le prix sans frais de port et remise appliquer :"+TOT)
console.log("remise appliquer :"+REM)
console.log("frais de port :"+PORT)
console.log("Le prix à payer est de :"+PAP)


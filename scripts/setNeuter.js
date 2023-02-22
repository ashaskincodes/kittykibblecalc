var neuterMultiplier = 1.2;

function setNeuter() {
if(ageMultiplier >= 2.5){
    neuterMultiplier = 1;
} else {
    neuterMultiplier =  document.getElementById('neuteranswer').value;
}
}
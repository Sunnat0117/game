
// console.log(elemP
let numberRandom = Math.round(Math.random() * 10);

function findNumber() {
let inp = document.getElementById('yourInput').value;
let elemP1 = document.getElementById('ett');
let elemH2 = document.getElementById('result');
// elemP1.innerHTML= "number random: " + numberRandom;

elemP2.innerHTML = "your number : " + inp;

if(numberRandom==inp){

    elemH2.innerHTML= "Goood!!!"
}
else if(numberRandom > inp){
    elemH2.innerHTML= "your number small"

}
else {
    elemH2.innerHTML= "your number bigger from number random"


}



console.log(inp);




    
    
}

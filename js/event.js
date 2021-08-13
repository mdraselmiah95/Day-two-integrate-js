/////////////////////////////////////////// 01 ******* 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
///////////////////////////////////////02
//Just set the name of the function
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//////////////////////////////////////03
const greenButton = document.getElementById('make-green-button');
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

///////////////////////////////////////////04
//Handling by using eventlistener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
///////////////////////////////////////////05
//add eventlistener
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
////////////////////////////////06
//shorter version **********
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
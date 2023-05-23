var imgTarget = document.getElementById('img')
var rand = Math.ceil(Math.random() * 5)
console.log(rand);
var imagesOfDice = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png"
];
imgTarget.src = imagesOfDice[rand]
document.getElementById('numberr').innerHTML = rand + 1 
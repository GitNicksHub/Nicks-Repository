var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = 'dice' + randomNumber1 + '.png';
var randomImageSource = 'images/' + randomDiceImage;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = 'images/dice' + randomNumber2 + '.png';
var image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource);

var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1 === randomNumber2) {
    h1.innerHTML = "Draw!";
}


// document.querySelector('.img3').style.width = '80%';


// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource = "images/dice" + randomNumber1 + ".png";
// var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource = "images/dice" + randomNumber2 + ".png";
// var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);


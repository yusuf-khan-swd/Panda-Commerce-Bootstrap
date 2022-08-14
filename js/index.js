
// Requirement 2
const elements = document.getElementsByTagName('h2');
for (let element of elements) {
  element.style.color = 'lightblue';
}


// Requirement 3
document.getElementById('backpack').style.backgroundColor = 'tomato';
// document.getElementById('backpack').style.padding = '2rem';


// Requirement 4
const allCardClasses = document.getElementsByClassName('card');
for (let card of allCardClasses) {
  card.style.borderRadius = '30px';
}


// Requirement 5
function myFunction() {
  console.log('Hello From JavaScript');
}


// Requirement 6
const allBuyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for (let button of allBuyNowButtons) {
  button.addEventListener('click', function (event) {
    event.target.style.display = 'none';
  })
}


// Requirement 7
const submitButton = document.getElementById('submit-button');
const inputField = document.getElementById('input-field');
inputField.addEventListener('keyup', function (event) {
  if (event.target.value === 'email') {
    submitButton.removeAttribute('disabled');
  }
  else {
    submitButton.setAttribute('disabled', 'true');
  }
});


// Requirement 10
function changeImage() {
  document.getElementById('image').style.transform = 'scale(1.2)';
  document.getElementById('image').style.transition = 'transform 0.3s'
}

function removeChange() {
  document.getElementById('image').style.transform = 'scale(1)';
}


// Requirement 9
function random(number) {
  return Math.floor(Math.random() * number);
}

document.getElementById('subscribe').addEventListener('dblclick', function (event) {

  event.target.style.backgroundColor = `rgba(${random(255)}, ${random(255)}, ${random(255)})`;
})
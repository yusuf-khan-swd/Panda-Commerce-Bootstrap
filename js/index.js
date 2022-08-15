
// Requirement 2: select by element
const elements = document.getElementsByTagName('h2');
for (let element of elements) {
  element.style.color = 'lightblue';
}


// Requirement 3: select by id
document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementById('backpack').style.padding = '2rem';


// Requirement 4: select all classes
const allCardClasses = document.getElementsByClassName('card');
for (let card of allCardClasses) {
  card.style.borderRadius = '30px';
}


// Requirement 5: add funtion to onclick event
function myFunction() {
  console.log('Hello From JavaScript');
}


// Requirement 6: remove buy now button on click
const allBuyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for (let button of allBuyNowButtons) {
  button.addEventListener('click', function (event) {
    // event.target.style.display = 'none';
    event.target.parentNode.removeChild(event.target);
  })
}


// Requirement 7: email
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


// Requirement 10: add event to mouseenter  and mouseleave
function changeImage() {
  document.getElementById('image').style.transform = 'scale(1.2)';
  document.getElementById('image').style.transition = 'transform 0.3s'
}

function removeChange() {
  document.getElementById('image').style.transform = 'scale(1)';
}


// Requirement 9: change background with double click
function random(number) {
  return Math.floor(Math.random() * number);
}

document.getElementById('subscribe').addEventListener('dblclick', function (event) {

  event.target.style.backgroundColor = `rgba(${random(255)}, ${random(255)}, ${random(255)})`;
});




// Extra password matching
const matchedButton = document.getElementById('matched');
const password = document.getElementById('password');
document.getElementById('confirm-password').addEventListener('keyup', function (event) {
  if (event.target.value === password.value) {
    matchedButton.removeAttribute('disabled');
  }
  else {
    matchedButton.setAttribute('disabled', 'true');
  }
});


// AddItem
// const cards = document.getElementsByClassName('card');
// for (let card of cards) {
//   card.addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document.getElementById('shoes-container').addEventListener('click', function (event) {
  event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn-add-item').addEventListener('click', function () {
  const shoes = document.getElementById('shoes');
  const div = document.createElement('div');

  div.innerHTML = `          <div class="col">
  <div class="card border border-0 shadow-lg h-100">
    <img
      src="./images/shoes/shoe-1.png"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Supply 350</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural
        lead-in to additional.
      </p>
      <h5>$120</h5>
    </div>
    <div class="m-3">
      <div class="btn panda-btn-buy-now">Buy Now</div>
    </div>
  </div>
</div>`;

  shoes.appendChild(div);
});
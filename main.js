var letsCookButton = document.querySelector('.lets-cook-button');
var resultBox = document.querySelector('.result-box');
var select = document.querySelectorAll('.select');
var addRecipeButton = document.querySelector('.add-a-recipe-button');
var customForm = document.querySelector('.custom-form');
var customText = document.querySelectorAll('.custom-text');
var addNewButton = document.querySelector('.add-new-button')

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

letsCookButton.addEventListener('click', randomizeDish);
resultBox.addEventListener('click', restartQuery);
addRecipeButton.addEventListener('click', promptModal);
addNewButton.addEventListener('click', addNewRecipe);

function randomizeDish() {
  var randomSideDish = getRandomIndex(sides);
  var randomMainDish = getRandomIndex(mains);
  var randomDessert = getRandomIndex(desserts);
  if (select[0].checked) {
    displayDish(randomSideDish);
  } else if (select[1].checked) {
    displayDish(randomMainDish);
  } else if (select[2].checked) {
    displayDish(randomDessert);
  } else if (select[3].checked) {
    displayMeal(randomSideDish, randomMainDish, randomDessert);
  }
  clearRadios();
}

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayDish(dish) {
  resultBox.innerHTML = '';
  var singleDishBlock =
  `<div class="dish-block">
    <div class="dish-info">
      <h4>You should make:</h4>
      <h1>${dish}!</h1>
    </div>
    <div class="clear-div">
      <button class="clear-button">CLEAR</button>
    </div>
  </div>`
  resultBox.insertAdjacentHTML('afterbegin', singleDishBlock);
}

function clearRadios() {
  for (var i = 0; i < select.length; i++) {
    select[i].checked = false;
  }
}

function displayMeal(main, side, dessert) {
  resultBox.innerHTML = '';
  var mealBlock =
  `<div class="dish-block">
    <div class "dish-info">
      <h4>You should make:</h4>
      <h3>${main} with a side of ${side} and ${dessert} for dessert!</h3>
    </div>
    <div class="clear-div">
      <button class="clear-button">CLEAR</button>
    </div>
  </div>`
  resultBox.insertAdjacentHTML('afterbegin', mealBlock);
}

function restartQuery(event) {
  var cookPotIcon = `<img class="cook-pot-icon"src="assets/cookpot.svg" alt="cookpot icon">`
  if (event.target.classList.contains('clear-button')) {
    resultBox.innerHTML = '';
    resultBox.insertAdjacentHTML('afterbegin', cookPotIcon);
  }

}
function promptModal() {
  customForm.classList.remove('hidden');
}

function addNewRecipe() {
  event.preventDefault();
  if (customForm.children[3]) {
    customForm.children[3].remove()
  }
  customText[0].value = customText[0].value.toLowerCase();
  if (customText[0].value === 'side') {
    sides.push(customText[1].value);
  } else if (customText[0].value === 'main dish') {
    mains.push(customText[1].value);
  } else if (customText[0].value === 'dessert') {
    desserts.push(customText[1].value);
  } else {
    showError();
  }
  clearForm();
}

function clearForm() {
  customText[0].value = '';
  customText[1].value = '';
}

function showError() {
  var errorMessage =
  `<p class=error-message>Fill out both fields with a valid Recipe Type</p>`
  customForm.insertAdjacentHTML('beforeend', errorMessage);
}

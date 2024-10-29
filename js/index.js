const listElements = document.getElementById('ul');


const Sweet = new Array(
    'BOOberry Pies', 'Rice Krispie Brains', 'Mummy Cake Pops', 'Spiderweb Brownies', 'Bat Cookies'
);

const Savory = new Array(
    'Eyeballs Appetizer', 'Breadstick Serpents', 'Pumpkin Baked Brie', 'Spider Pizzas', 'Ghost Veggies and Hummus'
);

function switchLists() {

    const radioButtons = document.querySelectorAll('input[name = "choice"]');
    var selectedValue = '';

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }
    if (selectedValue == "Sweet Treats") {
        while (listElements.firstChild) {
            listElements.removeChild(listElements.firstChild);
          }
        for (const item of Sweet) {
            var newElement = document.createElement('li');
            newElement.textContent = item;
            listElements.appendChild(newElement);
        }
    }
    else if (selectedValue == "Savory Eats") {
        while (listElements.firstChild) {
            listElements.removeChild(listElements.firstChild);
          }
        for (const item of Savory) {
            var newElement = document.createElement('li');
            newElement.textContent = item;
            listElements.appendChild(newElement);
        }
    }
};
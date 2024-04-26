// Welcome user 
var Student = /** @class */ (function () {
    function Student(firstName) {
        this.firstName = firstName;
        this.fullName = firstName;
    }
    return Student;
}());
function greeter(person) {
    return "Weclome, " + person.firstName;
}
var user = new Student("User");
var greetingElement = document.getElementById("greeting");
if (greetingElement !== null) {
    greetingElement.textContent = greeter(user);
}
else {
    console.error("Element with ID 'greeting' not found.");
}
// Date
var dateELement = document.getElementById("date");
if (dateELement !== null) {
    var currentDate = new Date();
    dateELement.textContent = currentDate.toDateString();
}
else {
    console.error("Element with ID 'date' not found.");
}
// API 
var url = "https://api.thecatapi.com/v1/images/search?limit=10";
var api_key = "live_TP8bsDfBxXx9lJmij3tafhIg3UdhtyH018l8h5dE8pwkKP3YkO9l059jtDjhTHDj";
fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    var imagesData = data;
    imagesData.map(function (imageData) {
        var image = document.createElement('img');
        // Use the URL from the image object
        image.src = "".concat(imageData.url);
        var gridCell = document.createElement('div');
        gridCell.classList.add('col');
        gridCell.classList.add('col-lg');
        gridCell.appendChild(image);
        var gridElement = document.getElementById('grid');
        if (gridElement) {
            gridElement.appendChild(gridCell);
        }
    });
})
    .catch(function (error) {
    console.log(error);
});
var btn = document.getElementById('clkBtn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var body = document.body;
    if (body) {
        var currentColor = window.getComputedStyle(body).backgroundColor;
        var isRed = currentColor === 'rgb(255, 0, 0)' || currentColor === '#ff0000'; // Check if the current color is red
        // Toggle between red and the current color
        body.style.backgroundColor = isRed ? '' : 'red';
    }
});

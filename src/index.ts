// Welcome user 
class Student {
  fullName: string;
  constructor(
    public firstName: string,
  
  ) {
    this.fullName = firstName;
  }
}

interface Person {
  firstName: string;
}

function greeter(person: Person) {
  return "Weclome, " + person.firstName ;
}

let user = new Student("User");

const greetingElement = document.getElementById("greeting");
if (greetingElement !== null) {
  greetingElement.textContent = greeter(user);
} else {
  console.error("Element with ID 'greeting' not found.");
}

// Date
let dateELement = document.getElementById("date");
if(dateELement !== null){
    let currentDate: Date = new Date();  
  dateELement.textContent = currentDate.toDateString();    
} else {
  console.error("Element with ID 'date' not found.");
}
// API 
const url: string = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key: string = "live_TP8bsDfBxXx9lJmij3tafhIg3UdhtyH018l8h5dE8pwkKP3YkO9l059jtDjhTHDj";

fetch(url, {
  headers: {
    'x-api-key': api_key
  }
})
  .then((response: Response) => {
    return response.json();
  })
  .then((data: any[]) => {
    let imagesData: any[] = data;
    imagesData.map(function (imageData: any) {

      let image: HTMLImageElement = document.createElement('img');
      // Use the URL from the image object
      image.src = `${imageData.url}`;

      let gridCell: HTMLDivElement = document.createElement('div');
      gridCell.classList.add('col');
      gridCell.classList.add('col-lg');
      gridCell.appendChild(image)

      let gridElement: HTMLElement | null = document.getElementById('grid');
      if (gridElement) {
        gridElement.appendChild(gridCell);
      }

    });
  })
  .catch(function (error: Error) {
    console.log(error);
  });

const btn = document.getElementById('clkBtn');

btn?.addEventListener('click', () => {
  const body: HTMLElement | null = document.body;
  if (body) {
    const currentColor = window.getComputedStyle(body).backgroundColor;
    const isRed = currentColor === 'rgb(255, 0, 0)' || currentColor === '#ff0000'; // Check if the current color is red

    // Toggle between red and the current color
    body.style.backgroundColor = isRed ? '' : 'red';
  }
});
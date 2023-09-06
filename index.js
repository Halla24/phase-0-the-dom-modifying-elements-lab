// Create a new <div> element
//const element = document.createElement("div");

// Append the created element to the body
//document.body.append(element);

// Create an unordered list and add it to the created <div> element
//const ul = document.createElement("ul");
//for (let i = 0; i < 3; i++) {
  //const li = document.createElement("li");
  //li.textContent = (i + 1).toString();
  //ul.append(li);
//}
//element.append(ul);

// Grab an element by its ID
//const main = document.getElementById("main");


// Set its innerHTML to create the desired content
//main.innerHTML =
  //"<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// Change the style of an element
//element.style.height = "300px";
//element.style.backgroundColor = "#27647B";
//element.textContent = "You've changed what's on the screen!";
//element.style.fontSize = "24px";
//element.style.marginLeft = "30px";
//element.style.lineHeight = 2;

// Change the class of an element
//element.className = "pet-listing dog";

// Alternatively, use classList to add and remove classes
//element.classList.remove("dog");
//element.classList.add("cat", "sale");

// Remove a specific child element from a parent element
//const secondChild = ul.querySelector("li:nth-child(2)");
//ul.removeChild(secondChild);

// Remove the entire element from the DOM
//ul.remove();


  // 1. Remove the <main> element with id 'main' if it exists
  const main = document.getElementById('main');
  if (main) {
    main.remove();
  };


  // 2. Create a new <h1> element with the id 'victory' and desired text
  const newHeader = document.createElement('h1');
  newHeader.id = 'victory';
  newHeader.textContent = 'Halla is the champion';

  document.body.appendChild(newHeader);

  if (newHeader) {
    console.log(newHeader.textContent);
  } else {
    console.log("newHeader not found");
  }


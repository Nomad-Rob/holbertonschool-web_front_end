/* Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Holberton!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function

Requirements:

Use vanilla JavaScript to add the elements to the DOM and change the style of the page
JQuery not allowed!
*/

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
  var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
  var paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(paragraph);
  
  var buttonSpooky = document.createElement('button');
  buttonSpooky.innerHTML = 'Spooky';
  buttonSpooky.onclick = spooky;
  document.body.appendChild(buttonSpooky);
  
  var buttonDarkMode = document.createElement('button');
  buttonDarkMode.innerHTML = 'Dark mode';
  buttonDarkMode.onclick = darkMode;
  document.body.appendChild(buttonDarkMode);
  
  var buttonScreamMode = document.createElement('button');
  buttonScreamMode.innerHTML = 'Scream mode';
  buttonScreamMode.onclick = screamMode;
  document.body.appendChild(buttonScreamMode);
}

main();

/* Create a function named welcome:

It takes two arguments: firstName (string) and lastName (string)
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome function, write a function named displayFullName:
It should display an alert with the message Welcome + the variable fullName + and exclamation mark.
Call the function displayFullName at the end of the function welcome

How to test

Open your web inspector in the tab “Console”
Copy paste your code
Run welcome('Holberton', 'School'); should prompt an alert with this content: Welcome Holberton School!
alert(fullName), should return a reference error fullName is not defined
*/

function welcome(firstName, lastName) {
  var fullName = firstName + " " + lastName;

  function displayFullName() {
    alert("Welcome " + fullName + " !");
  }

  displayFullName();
}

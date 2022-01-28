


console.log(document.getElementById('El')) //Returns a reference to the first object with the specified value of the ID attribute.String that specifies the ID value.

console.log(document.getElementsByClassName('Fine')) //Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

console.log (document.querySelector('.Fine')) //Returns the first element that uses the selectors

console.log (document.querySelectorAll('#El')) //Returns all element descendants of node that match selector

//get the element

let image = document.querySelectorAll('img')
let imgEle = image[0]

//add the classes
imgEle.className = 'tia' //Returns the value of element's class content attribute. Can be set to change it.

//or

imgEle.setAttribute('class', 'la')  //Sets the value of element's first attribute whose qualified name is qualifiedName to value.


//DOM MANIPULATION IS EDITING YOUR HTML IN JAVASCRIPT
function addClass(){
    imgEle.setAttribute('class', 'la')
}
imgEle.addEventListener ('click', addClass ) //Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

//ASSIGNMENT
// EDIT THE HTML FILE WITH JAVASCRIPT

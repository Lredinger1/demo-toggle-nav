// Step 1. Select the element that the user is going to click on to show the menu.
const btn = document.querySelector('.toggle-btn');

//Step 2. Add a click event to the button
btn.addEventListener('click', function(){
    //when the button is clicked, add that special class name to the hidden element
    document.querySelector('nav').classList.toggle('show-nav'); //note: do not add a period to the classList method
});


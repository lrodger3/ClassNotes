// console.log(document);

// querySelector takes a node selection criteria
// querySelector takes a selector, CSS style
// querySelector returns ONE element
// document.querySelector("#main-title").textContent

// querySelectorAll - same as above but it will return an array of elements

// console.dir( document.querySelectorAll('p') );

// document.getElementById('main-title')

var btn = document.getElementsByClassName('crazy-btn')[0];

console.log(btn.textContent)


var counter = 0;
btn.addEventListener('click', function(){
   counter++
   if( counter >= 5){
    alert('Stop poking me!');
   }
});

document.querySelector('h1').addEventListener('click', function(){
  console.log('You clicked the title!');
});

console.log('Im on line 26!')


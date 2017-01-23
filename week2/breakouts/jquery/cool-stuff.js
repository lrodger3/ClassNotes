$(function() {
    // Selectors
    // anything that is a selector in CSS works as 
    // a selector in jQuery (and document.querySelectorAll);
    var pTags = $('p');
    var inputs = $('input');
    
    console.log(pTags, inputs);

    // Manipulation
    $('li')[0].style.color = "purple"; // one way

    $('li:nth-child(1)').css({ color: 'red' }); // a more jQuery way
    $('li:nth-child(2)').css({ color: 'orange' }); 
    $('li:nth-child(3)').css({ color: 'blue' });
    $('li:nth-child(4)').css({ color: 'purple' });

    $('li').css({ color: 'black' }); // changes all li's in the DOM to the color black

    // Form data
    $('input').map(function(item) { console.info(item); });
    $('input').map(function(index, item) { console.info(index, item.value); });
    $('input').serialize();
}); // run this code only when the Browser tells us the page is ready (Document Ready Event)
// https://api.jquery.com/ready/


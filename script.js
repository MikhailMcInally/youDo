$(".edit-btn").click(function(){
    $(this).parent().attr('contenteditable', 'true');
    
    // keypress event
    $(this).parent().keypress(function(event){
        if (event.which === 13){
            $(this).blur();
        }
    });

    // disable delete when the edit field is ""
});

$('input[type="text"]').keypress(function(event){
    if (event.which === 13){
        // unfocus the element
        $(this).blur();
    }
});

$('add-card').on("click", function(){
    
});

$('.add-card').one('click', function(){
    console.log('first time clicked');
    $(this).click(function(){
        console.log("second time clicked");
    });
})


/****Notes************

    .focusout() only calls an event when the element is 
    unfocused, it does not 'unfocus' the element.
    .focusin() is probably similar.

    .find() looks for the descendent of the element it's
    called on. This is different from .children which only
    look for the direct descendent of the element it's called on.  
    ex. .find('span')

    // give an Id to the element you want to manipulate
    <input type="text" id="myText" value="Sample Text">
    <br>
    // set onclick equal to the function you want to call


    // call a function that gains focus
    <button type="button" onclick="focusInput()">Click me to focus</button>
    // call a function to unfocus
    <button type="button" onclick="blurInput()">Click me to unfocus</button>

    <script>
        function focusInput() {
            document.getElementById('myText').focus();
        }
        function blurInput() {
            document.getElementById('myText').blur();
        }
    </script>

    .on() is a method that responds to any event on the selected element
    
    example1:
    $('p').on('click', function(){
        console.log('<p> was clicked')
    })

    example2:
    $('div').on('mouseenter mouseleave', function(){
        console.log('mouse hovered over or left <div>');
    }

    .on() can handle multiple events

    $('div').on({
        //event 1
        mouseenter: function() {...},
        //event 2
        mouseleave: function() {...},
        //event 3
        click: function() {...}
    });

    .dir() 
    .log()

    // with .on() it's possible to add pass in 
    data to the even object

    example:
    $('.add-card').on('click', {
        foo: 'bar'
    }, function(event){
        console.log("event data: " + event.data.foo + " should be 'bar'" );
    });

    // with .one() you can initiate an event only once
    this would be useful as a setup

    
    $('.add-card').one('click', function(){
        console.log('first time clicked');
        $(this).click(function(){
            console.log("second time clicked");
        });
    })

    preventDefault() and stopPropagation()

    $("div").click(function(event){
        alert('hello');
    });

    $('body').on({
        click: function(event){alert('hello');}, 'button' );
    });

    // same function as above, just different syntex
    $('body').on('click', 'button', function(event){
        alert('hello');
    });

*/
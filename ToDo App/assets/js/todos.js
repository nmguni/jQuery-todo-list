
$("ul").on('click', 'li', function() { 
$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){ // .parent to retvie li that is encloseing the span 
        $(this).remove();
    });
    event.stopPropagation(); // stops from bubling up to other elements
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ // which is the eneter key 
        let todoText = $(this).val()
        $(this).val('');
        $('ul').append('<li><span><i class="fa fa-trash"></i></span>' + todoText + '</li>');
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle()
});
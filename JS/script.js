$( document ).ready(function() {
    
    $('.liste_navigation').hide();
    $('#autodidacte').hide();
    $('#studiom').hide();
    $('#moins').hide();
    
    $('.menu_burger').on('click', function() {
        $('.liste_navigation').toggle();
    });
    
    $('header img').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#presentation').offset().top
        }, 1000);
    });
    
    $('#presentation article').hover( function () {
        $(this).css("box-shadow", "0px 0px 5px #375D81");
    });     
    
    $('#presentation article').mouseleave( function () {
        $(this).css("box-shadow", "0px 0px 0px #375D81");
    });
    
    $('#formations article').hover( function () {
        $(this).css("box-shadow", "0px 0px 5px #FFBD4F");
    });     
    
    $('#formations article').mouseleave( function () {
        $(this).css("box-shadow", "0px 0px 0px #FFBD4F");
    });
    
    $('#plus').on('click', function() {
        $('#plus').hide();
        $('#moins').show();
        $('#autodidacte').fadeIn();
        $('#studiom').fadeIn();
    });
    
    $('#moins').on('click', function() {
        $('#plus').show();
        $('#moins').hide();
        $('#autodidacte').fadeOut();
        $('#studiom').fadeOut();
    });
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#presentation article').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
        $('#experiences article').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });
    
    });
    
    
});
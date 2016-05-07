jQuery(function($){
    $('.Tag_Nav_Aux a').filter(function(){
       return $(this).attr('href').toLowerCase() === window.location.pathname.toLowerCase();
    }).addClass('active');
});

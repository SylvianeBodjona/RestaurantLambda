    /* REDIRECTION VERS LES DIFFERENTES SECTIONS EN UN CLIC*/
    /*BOUTON BOOK A TABLE*/
$('.js--scroll-to-table').click(function(){
$('html, body').animate({scrollTop:$('#reserver').offset().top},1000); /*quand je clic sur le bouton ca prendra 1 seconde (1000ms) pour arriver a ladite section, avec un effet de glissement*/
});

$('.js--scroll-to-menu').click(function(){
$('html, body').animate({scrollTop:$('#lacartee').offset().top},1000); 
});
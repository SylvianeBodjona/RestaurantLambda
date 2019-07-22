$(document).ready(function(){
    /*alert("aloooo");*/
    
    /*POUR LE DROPDOWN LIST*/
  var $select = $(".partynumberselect");
    for (i=2;i<=30;i++){
        $select.append($('<option></option>').val(i).html(i)) /*je cree le tag option dans le select existant et l'initialise avec des valeurs de 2 a 30*/
    }
    
    
    /*POUR LA CONFIRMATION BOOK ME*/
    
    $("form").submit(function (e) { //si le formulaire a ete soumi alors on affiche un message de confirmation avec le nom du client
  alert("Merci d'avoir choisi Restaurant Lambda pour votre réception. Votre réservation a été enregistrée au nom de "+ $('#nom').val() +". Au plaisir!");
});
    
});
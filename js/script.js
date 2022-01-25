$(document).ready(documentReady)

function documentReady(event){ 
// cards border
    $('.join').hover(addBorderCard);
    $('.cardMain').mouseout(removeBorderCard);
    $('.join').mouseout(addBorderCard);
    $('button').hover(addBorderCard);
    $('button').click(addCard);
    $('.xButton').hover(removeCard);

  
    
}

function addBorderCard(event){
    $('.cardMain').css('border', '3px solid rgb(59, 102, 86)'); 
    

}

function removeBorderCard(event){
    $('.cardMain').css('border', '0px solid white'); 

}

function menuCard(event){
  var newCard =  $( '.cardMain' ).clone();

}
function addCard(event){
 //   $('.cardhover').css("visibility","visible");
 $('.cardhover').css("visibility", "visible");
 $('.cardMain').css("visibility", "hidden");
}

function removeCard(event){
    //   $('.cardhover').css("visibility","visible");
    $('.cardhover').css("visibility", "hidden");
    $('.cardMain').css("visibility", "visible");
   }

  
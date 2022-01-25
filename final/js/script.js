$(document).ready(documentReady)

function documentReady(event){ 
// cards border
    $('.button1').hover(addBorderCard1);
    $('.button2').hover(addBorderCard2);
    $('.button3').hover(addBorderCard3);
    $('.button4').hover(addBorderCard4);
    $('.button5').hover(addBorderCard5);
    $('.button6').hover(addBorderCard6);

    $('.joinButton1').hover(addBorderCard1);
    $('.joinButton2').hover(addBorderCard2);
    $('.joinButton3').hover(addBorderCard3);
    $('.joinButton4').hover(addBorderCard4);
    $('.joinButton5').hover(addBorderCard5);
    $('.joinButton6').hover(addBorderCard6);

  $('.selectArtist').hover(addBorderArtist);
  $('.selectDesigner').hover(addBorderDesigner);
  $('.selectEngineer').hover(addBorderEngineer);
    

    $('.cardMain').mouseout(removeBorderCard);
  
    $('.closeButtonNav').click(hideNav);




  
    
}

function addBorderCard1(event){
    $('.card1').css('border', '3px solid rgb(59, 102, 86)'); 
    }
    function addBorderCard2(event){
        $('.card2').css('border', '3px solid rgb(59, 102, 86)'); 
        }
        function addBorderCard3(event){
            $('.card3').css('border', '3px solid rgb(59, 102, 86)'); 
            }
            function addBorderCard4(event){
                $('.card4').css('border', '3px solid rgb(59, 102, 86)'); 
                }
                function addBorderCard5(event){
                    $('.card5').css('border', '3px solid rgb(59, 102, 86)'); 
                    }
                    function addBorderCard6(event){
                        $('.card6').css('border', '3px solid rgb(59, 102, 86)'); 
                        }


function removeBorderCard(event){
    $('.cardMain').css('border', '0px solid white'); 

}

function addBorderArtist(event){
    $('.card1').css('border', '3px solid rgb(240,59,59)'); 
}

function addBorderDesigner(event){
    $('.card2').css('border', '3px solid rgb(98,199,68)'); 
}

function addBorderEngineer(event){
    $('.card3').css('border', '3px solid rgb(17, 164, 230)'); 
}

function hideNav(event){
    $('.hideButtons').css('visibility', 'hidden'); 
}

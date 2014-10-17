$(document).ready(function() {

    $('#champignons').hide();
    $('#algues').hide();
    $("#bettrave").hide();
    $("#tomate").hide();
    $("#carotte").hide();
    $("#chutney").hide();
    $("#epautre").hide();
    $("#tofu").hide();
    $("#mousse").hide();
    $("#pita").hide();
    $("#pois").hide();



    $(document).keypress(function(e){
        console.log(e.which, " is keydown");
        switch (e.which){
            case 101:
                if($('#champignons').hasClass('active')){
                    $('#champignons').hide();
                    $('#champignons').removeClass('active');
                    $('.champignons').css('background-color', 'transparent');
                }
                else{
                    $('#champignons').show();
                    $('#champignons').addClass('active');
                    $('.champignons').css('background-color', '#CF8B56');
                }
            break;
            case 121:
                if($('#algues').hasClass('active')){
                    $('#algues').hide();
                    $('#algues').removeClass('active');
                    $('.algues').css('background-color', 'transparent');
                }
                else{
                    $('#algues').show();
                    $('#algues').addClass('active');
                    $('.algues').css('background-color', '#3A668F');
                }
            break;
            case 102:
                if($('#bettrave').hasClass('active')){
                    $('#bettrave').hide();
                    $('#bettrave').removeClass('active');
                    $('.bettrave').css('background-color', 'transparent');
                }
                else{
                    $('#bettrave').show();
                    $('#bettrave').addClass('active');
                    $('.bettrave').css('background-color', '#E43B82');
                }
            break;
            case 103: 
                if($('#tomate').hasClass('active')){
                    $('#tomate').hide();
                    $('#tomate').removeClass('active');
                    $('.tomate').css('background-color', 'transparent');
                }
                else{
                    $('#tomate').show();
                    $('#tomate').addClass('active');
                    $('.tomate').css('background-color', '#E9284A');
                }
            break;
             case 114: 
                if($('#carotte').hasClass('active')){
                    $('#carotte').hide();
                    $('#carotte').removeClass('active');
                    $('.carotte').css('background-color', 'transparent');
                }
                else{
                    $('#carotte').show();
                    $('#carotte').addClass('active');
                    $('.carotte').css('background-color', '#F0655D');
                }
            break;
            case 122: 
                if($('#epautre').hasClass('active')){
                    $('#epautre').hide();
                    $('#epautre').removeClass('active');
                    $('.epautre').css('background-color', 'transparent');
                }
                else{
                    $('#epautre').show();
                    $('#epautre').addClass('active');
                    $('.epautre').css('background-color', '#F88721');
                }
            break;
            case 104: 
                if($('#tofu').hasClass('active')){
                    $('#tofu').hide();
                    $('#tofu').removeClass('active');
                    $('.tofu').css('background-color', 'transparent');
                }
                else{
                    $('#tofu').show();
                    $('#tofu').addClass('active');
                    $('.tofu').css('background-color', '#F7C352');
                }
            break;
            case 116: 
                if($('#mousse').hasClass('active')){
                    $('#mousse').hide();
                    $('#mousse').removeClass('active');
                    $('.mousse').css('background-color', 'transparent');
                }
                else{
                    $('#mousse').show();
                    $('#mousse').addClass('active');
                    $('.mousse').css('background-color', '#05BAA3');
                }
            break;
            case 117: 
                if($('#pita').hasClass('active')){
                    $('#pita').hide();
                    $('#pita').removeClass('active');
                    $('.pita').css('background-color', 'transparent');
                }
                else{
                    $('#pita').show();
                    $('#pita').addClass('active');
                    $('.pita').css('background-color', '#563354');
                }
            break;
            case 115: 
                if($('#pois').hasClass('active')){
                    $('#pois').hide();
                    $('#pois').removeClass('active');
                    $('.pois').css('background-color', 'transparent');
                }
                else{
                    $('#pois').show();
                    $('#pois').addClass('active');
                    $('.pois').css('background-color', '#F8AEAF');
                }
            break;
        }

    });

});
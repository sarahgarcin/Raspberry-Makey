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

    var count = 0;
    var active = $(document).find('.active').length;

    declencheAnim();

    function declencheAnim(){
        $(document).keypress(function(e){
            console.log(e.which, " is keydown");
            switch (e.which){
                case 101:
                    if($('#champignons').hasClass('active')){
                        $('#champignons').hide();
                        $('#champignons').removeClass('active');
                        $('.champignons').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#champignons').show();
                        $('#champignons').addClass('active');
                        $('.champignons').css('background-color', '#CF8B56');
                        count ++;
                    }
                break;
                case 121:
                    if($('#algues').hasClass('active')){
                        $('#algues').hide();
                        $('#algues').removeClass('active');
                        $('.algues').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#algues').show();
                        $('#algues').addClass('active');
                        $('.algues').css('background-color', '#3A668F');
                        count ++;
                    }
                break;
                case 102:
                    if($('#bettrave').hasClass('active')){
                        $('#bettrave').hide();
                        $('#bettrave').removeClass('active');
                        $('.bettrave').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#bettrave').show();
                        $('#bettrave').addClass('active');
                        $('.bettrave').css('background-color', '#E43B82');
                        count ++;
                    }
                break;
                case 103: 
                    if($('#tomate').hasClass('active')){
                        $('#tomate').hide();
                        $('#tomate').removeClass('active');
                        $('.tomate').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#tomate').show();
                        $('#tomate').addClass('active');
                        $('.tomate').css('background-color', '#E9284A');
                        count ++;
                    }
                break;
                 case 114: 
                    if($('#carotte').hasClass('active')){
                        $('#carotte').hide();
                        $('#carotte').removeClass('active');
                        $('.carotte').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#carotte').show();
                        $('#carotte').addClass('active');
                        $('.carotte').css('background-color', '#F0655D');
                        count ++;
                    }
                break;
                case 122: 
                    if($('#epautre').hasClass('active')){
                        $('#epautre').hide();
                        $('#epautre').removeClass('active');
                        $('.epautre').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#epautre').show();
                        $('#epautre').addClass('active');
                        $('.epautre').css('background-color', '#F88721');
                        count ++;
                    }
                break;
                case 104: 
                    if($('#tofu').hasClass('active')){
                        $('#tofu').hide();
                        $('#tofu').removeClass('active');
                        $('.tofu').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#tofu').show();
                        $('#tofu').addClass('active');
                        $('.tofu').css('background-color', '#F7C352');
                        count ++;
                    }
                break;
                case 116: 
                    if($('#mousse').hasClass('active')){
                        $('#mousse').hide();
                        $('#mousse').removeClass('active');
                        $('.mousse').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#mousse').show();
                        $('#mousse').addClass('active');
                        $('.mousse').css('background-color', '#05BAA3');
                        count ++;
                    }
                break;
                case 117: 
                    if($('#pita').hasClass('active')){
                        $('#pita').hide();
                        $('#pita').removeClass('active');
                        $('.pita').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#pita').show();
                        $('#pita').addClass('active');
                        $('.pita').css('background-color', '#563354');
                        count ++;
                    }
                break;
                case 115: 
                    if($('#pois').hasClass('active')){
                        $('#pois').hide();
                        $('#pois').removeClass('active');
                        $('.pois').css('background-color', 'transparent');
                         count --;
                    }
                    else{
                        $('#pois').show();
                        $('#pois').addClass('active');
                        $('.pois').css('background-color', '#F8AEAF');
                         count ++;
                    }
                break;

            }
        });
    }

        




        // // console.log(count);

        // if(count < 5){
        //     console.log("Vous n'avez pas assez d'éléments dans votre recette");
        // }

        // else if(count <= 8 && count >= 5 ){
        //     console.log("Vous pouvez valider votre recette");
        // }

        // else {
        //     console.log("Vous ne pouvez pas rajouter d'élements à votre recette");
        // }

    

});
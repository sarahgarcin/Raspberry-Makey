$(document).ready(function() {

    $('#champignons').hide();
    $('#algues').hide();
    $("#bettrave").hide();
    $("#tomate").hide();
    $("#carotte").hide();
    $("#chutney").hide();



    $(document).keypress(function(e){
        console.log(e.which, " is keydown");
        switch (e.which){
            case 97:
                $('#champignons').show();
            break;
            case 101:
                $('#algues').show();
            break;
            case 122:
                $("#bettrave").show();
            break;
            case 114: 
                $("#tomate").show();
            break;
             case 116: 
                $("#carotte").show();
            break;
        }

    });

});
$(document).ready(function() {
	
	// $(".square").hide();
		$(document).keydown(function(e){
			if(e.keyCode == 65) {
				$(".square").css("opacity", "0");
				$(document).keyup(function(e){
					if(e.keyCode == 65) {
						$(".square").css("opacity", "1");
					}
				});
			}
		});

		$(document).keydown(function(e){
			if(e.keyCode == 83) {
				$(".rond").css("opacity", "0");
				$(document).keyup(function(e){
					if(e.keyCode == 83) {
						$(".rond").css("opacity", "1");
					}
				});
			}
		});



});
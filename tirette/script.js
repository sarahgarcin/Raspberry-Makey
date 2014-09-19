$(document).ready(function() {
	$(document).keydown(function(e){
			console.log(e.keyCode, " is keydown");
			$(".key-"+e.keyCode).css("opacity", "0");

			$(document).keyup(function(e){
				console.log(e.keyCode, " is up");
				$(".key-"+e.keyCode).css("opacity", "1");
			});
	});
});

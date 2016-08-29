$(document).ready(function() {
	//Hides main header when mouse enters the main header area
	// $("#main-header").mouseenter(function() {
	// 	$(this).hide(2000);
	// });
	
	//Hides main header when page is scrolled 30px
	$(window).scroll(function() { 
		if($(window).scrollTop() > 30) {
			$("#main-header").fadeOut(1000);
		} else {
			$("#main-header").fadeIn(1000);
		}
	});

	//Increases/decreses size of logos on mouse enter/leave
	$(".logo").mouseenter(function() {
		$(this).stop().animate({
			width: "165px"
		}, function() {
			$(".logo").mouseleave(function() {
				$(this).stop().animate({
					width: "150px"
				}); 
	  		}); //mouseleave
		}); //callback
	}); //mouseenter


	// $(window).scroll(function() {
	// 	if($(window).scrollTop() > 150) {
	// 		$("#Home").addClass("border");
	// 	} else if($(window).scrollTop() > 549) {
	// 		$("#Home").removeClass("border");
	// 	} else {
	// 		$("#Home").removeClass("border");
	// 	}
	// });
	// $(window).scroll(function() {
	// 	if($(window).scrollTop() > 550) {
	// 		$("#About").addClass("border");
	// 	} else {
	// 		$("#About").removeClass("border");
	// 	}
	// });
	// $(window).scroll(function() {
	// 	if($(window).scrollTop() > 850) {
	// 		$("#Services").addClass("border");
	// 	} else {
	// 		$("#Services").removeClass("border");
	// 	}
	// });

	$(window).scroll(function() {
		if($(window).scrollTop() > 150) {
			$("#Bord1").animate({width: "+=100%"}, 2000);
		} if($(window).scrollTop() > 550) {
			$("#Bord2").animate({width: "+=100%"}, 2000);
		} if($(window).scrollTop() > 850) {
			$("#Bord3").animate({width: "+=100%"}, 2000);
		}
	});

});
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
		});
	});
	$(".logo").mouseleave(function() {
		$(this).stop().animate({
			width: "150px"
		});
	});
});
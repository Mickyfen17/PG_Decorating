$(document).ready(function() {
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
});
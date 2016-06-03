$(document).ready(function(){
	
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.img-circle').fadeIn();
		} else {
			$('#.img-circle').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#.img-circle').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
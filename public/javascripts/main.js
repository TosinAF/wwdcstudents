$(function () {
	$('#stream li a').click(function () {
		$('#modal').fadeIn(300);
		
		return false;
	});

	$('#modal').click(function () {
		$(this).fadeOut(300);
		
		return false;
	});
});
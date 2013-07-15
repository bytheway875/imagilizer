$(document).ready(function(){
	$('img:first').addClass('active');
	$('img:first')
		.clone()
		.appendTo('#panel')
		.css('width','auto');
	$('#sidebar img').click(function() {
		var selected_photo = $(this);
		$('#sidebar img').removeClass('active');
		$(this).addClass('active');
		$('#panel img').fadeOut('slow', function(){
			$('#panel img').remove();
			$(selected_photo)
				.clone()
				.css('width','auto')
				.hide()
				.appendTo('#panel')
				.fadeIn('slow');
		});
	});

});
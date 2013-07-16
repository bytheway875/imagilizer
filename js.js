function display_image(element){
	element
		.addClass('active')
		.clone()
		.appendTo('#panel_pic')
		.css('width','auto');
	text = element.data('caption');
	$('#panel p').remove();
	$('#panel').append('<p class= "text">' + text +'</p>');
	
}


$(document).ready(function(){
	// Display first image when page loads
		display_image($('img:first'));
	// Change panel photo when thumbnail is clicked
	$('#sidebar img').click(function() {
		var selected_photo = $(this);
		$('#sidebar img').removeClass('active');
		$('#panel img').fadeOut('slow', function(){ 
			$('#panel img:first').remove();
			display_image($(selected_photo));
			$('#panel img').hide().fadeIn('slow');
		});
	});
});
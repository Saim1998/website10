// submit subscribe form
$('#job-subscribe-form').on('submit', function(e) { 
	e.preventDefault();
	var form = $(this),
		formData = form.serialize(),
		action = form.attr('action'),
		button = $('#subscribe-btn');

	button.attr('disabled', true);

	$.ajax({
		type: 'post',
		url: action,
		data: formData,
		dataType: 'json',
		success: function(data) {
			$('.alert-msg').removeClass('hide').html(data.msg);
			$('#subscribe-email').val('');
			button.attr('disabled', false);
		}
	})
})
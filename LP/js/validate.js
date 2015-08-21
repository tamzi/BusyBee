        /*Form Validation.js to validate the form inputs and give users feedback if wrong*/

var Validate = (function () {

	function bindEvents() {
		$('.signup-form').submit(function () {
			$('.form-group').removeClass('has-error');
			$('.signup-form .alert').remove();

			var inputs = $(this).find('input');
			for (var i = 0; i < inputs.length; i++) {
				var input = inputs.eq(i);

				var type = input.attr('type');

				switch (type) {
					case 'checkbox': {
						if (!input.is(':checked')) {
							showError(input, 'Please accept the terms and conditions');
							return false;
						}
						break;
					}

					case 'email': {
						if (!validateEmail(input.val())) {
							showError(input, 'Please enter a valid email address');
							return false;
						}
						break;
					}

					case 'password': {
						if (input.val().length < 6) {
							showError(input, 'Please enter at least 6 characters');
							return false;
						}
						break;
					}

					case 'hidden':
						break;

					default: {
						if (input.val().length <= 0) {
							showError(input, 'The ' + input.attr('placeholder') + ' field is required');
							return false;
						}
					}
				}
			}

			return true;
		});
	}

	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	function showError(input, message) {
		if (input.attr('type') !== 'checkbox') {
			input.parents('.form-group').addClass('has-error');
		}

		var errorMessageAlert = $('<div>')
			.addClass('alert alert-danger')
			.html(message);

		input.parent().prepend(errorMessageAlert);

		input.focus();
	}

	return {
		init: function () {
			bindEvents();
		}
	};
})();

$(Validate.init);

$("#sign-up-content").ready(function() {
	$("#confirm-password").keyup(function() {
		$("#confirmed").css("display", "block");
		$("#confirmed").addClass("active");
		if ($(this).val() == "") {
			$("#confirmed").attr("src", "/assets/images/error.png");
		}
		else if ($(this).val() == $("#password").val()) {
			$("#confirmed").attr("src", "/assets/images/checkmark.png");
		} else {
			$("#confirmed").attr("src", "/assets/images/error.png");
		}
	});
});
$("#sign-up-content").ready(function() {
	$("#confirm-password").keyup(function() {
		console.log("pressed!");
		console.log($(this).val());
		console.log($("#confirm-password").val());
		if ($(this).val() == $("#password").val()) {
			console.log("it's the same!");
			$("#confirmed").css("display", "block");
			$("#confirmed").addClass("active");
		}
	});
});